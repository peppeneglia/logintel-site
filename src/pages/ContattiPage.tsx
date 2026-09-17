import { useState, type FormEvent } from 'react'
import type { LeadForm } from '../types'
import { supabase } from '../lib/supabase'
import { usePageTitle } from '../hooks/usePageTitle'
import { isValidEmail } from '../utils/validation'

const infoCards = [
  { icon: '📍', title: 'Sede', detail: 'Bari, Puglia, Italia' },
  { icon: '🏢', title: 'Programma', detail: 'NextOrbit by Deloitte' },
]

const EMPTY_FORM: LeadForm = { nome: '', azienda: '', email: '', veicoli: '', messaggio: '' }

const inputClass =
  'w-full px-4 py-3 rounded-[10px] border border-dark-border bg-white/5 text-slate-100 text-sm outline-none font-outfit placeholder:text-slate-500/60 focus:border-primary-500/50 transition-colors'
const labelClass = 'block text-[13px] font-semibold text-slate-400 mb-1.5 font-outfit'

export function ContattiPage() {
  usePageTitle('Contatti — Logintel')

  const [form, setForm] = useState<LeadForm>(EMPTY_FORM)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const update = (key: keyof LeadForm, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValidEmail(form.email)) {
      setError('Inserisci un indirizzo email valido.')
      return
    }
    setError('')
    setSending(true)

    if (supabase) {
      const { error: insertError } = await supabase.from('leads').insert({
        nome: form.nome || null,
        azienda: form.azienda || null,
        email: form.email.trim(),
        veicoli: form.veicoli || null,
        messaggio: form.messaggio || null,
        source: 'contact_form',
      })
      if (insertError) {
        setSending(false)
        setError('Invio non riuscito. Riprova tra qualche istante.')
        return
      }
    }

    setSending(false)
    setSent(true)
  }

  return (
    <div className="bg-dark min-h-screen pt-[72px]">
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Contatti</span>
            <h1 className="text-[clamp(28px,4vw,44px)] font-extrabold text-slate-100 mt-3 mb-4 font-outfit tracking-tight">
              Richiedi una demo
            </h1>
            <p className="text-slate-400 text-[17px] max-w-[500px] mx-auto font-outfit">
              Parlaci della tua flotta. Ti mostreremo come Logintel può ridurre i ritardi e i costi operativi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            {/* Form */}
            <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />

              {sent ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-[22px] font-bold text-slate-100 mb-3 font-outfit">Messaggio inviato!</h3>
                  <p className="text-slate-400 text-[15px] font-outfit">Ti contatteremo entro 24 ore lavorative.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-nome" className={labelClass}>Nome e Cognome</label>
                    <input id="contact-nome" name="nome" autoComplete="name" value={form.nome} onChange={(e) => update('nome', e.target.value)} placeholder="Mario Rossi" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-azienda" className={labelClass}>Azienda</label>
                    <input id="contact-azienda" name="azienda" autoComplete="organization" value={form.azienda} onChange={(e) => update('azienda', e.target.value)} placeholder="Transport S.r.l." className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>Email aziendale</label>
                    <input id="contact-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="nome@azienda.it" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-veicoli" className={labelClass}>Numero veicoli in flotta</label>
                    <input id="contact-veicoli" name="veicoli" inputMode="numeric" value={form.veicoli} onChange={(e) => update('veicoli', e.target.value)} placeholder="es. 85" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-messaggio" className={labelClass}>Messaggio (opzionale)</label>
                    <textarea
                      id="contact-messaggio"
                      name="messaggio"
                      value={form.messaggio}
                      onChange={(e) => update('messaggio', e.target.value)}
                      placeholder="Raccontaci le tue esigenze..."
                      rows={4}
                      className={`${inputClass} resize-y`}
                    />
                  </div>
                  {error && (
                    <p role="alert" className="sm:col-span-2 text-red-400 text-sm font-outfit">{error}</p>
                  )}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className={`w-full py-4 rounded-xl border-none bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit hover:shadow-lg hover:shadow-primary-500/25 transition-all ${sending ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {sending ? '⏳ Invio in corso...' : 'Invia Richiesta →'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-4">
              {infoCards.map((card) => (
                <div key={card.title} className="relative bg-gradient-to-br from-dark-card to-dark rounded-[14px] border border-dark-border p-5 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary-500" />
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{card.icon}</div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold font-outfit">{card.title}</div>
                      <div className="text-[15px] text-slate-100 font-bold font-outfit">{card.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
