import { useState } from 'react'
import { useEffect } from 'react'
import { LeadForm } from '../types'
import { supabase } from '../lib/supabase'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const infoCards = [
  { icon: '📧', title: 'Email', detail: 'info@logintel.it', color: '#3b82f6' },
  { icon: '📍', title: 'Sede', detail: 'Bari, Puglia, Italia', color: '#10b981' },
  { icon: '🏢', title: 'Programma', detail: 'NextOrbit by Deloitte', color: '#8b5cf6' },
  { icon: '🚀', title: 'Demo Day', detail: '31 Marzo 2026', color: '#f59e0b' },
]

export function ContattiPage() {
  const [form, setForm] = useState<LeadForm>({
    nome: '', azienda: '', email: '', veicoli: '', messaggio: '',
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [emailError, setEmailError] = useState('')

  useEffect(() => {
    document.title = 'Contatti — Logintel'
  }, [])

  const update = (key: keyof LeadForm, value: string) => setForm({ ...form, [key]: value })

  const handleSubmit = async () => {
    if (!isValidEmail(form.email)) {
      setEmailError('Inserisci un indirizzo email valido.')
      return
    }
    setEmailError('')
    setSending(true)

    if (supabase) {
      try {
        await supabase.from('leads').insert({
          nome: form.nome || null,
          azienda: form.azienda || null,
          email: form.email,
          veicoli: form.veicoli || null,
          messaggio: form.messaggio || null,
          source: 'contact_form',
        })
      } catch {
        // Silent fallback
      }
    }
    setSending(false)
    setSent(true)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-[10px] border border-dark-border bg-white/5 text-slate-100 text-sm outline-none font-outfit placeholder:text-slate-500/60 focus:border-primary-500/50 transition-colors'

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
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 to-emerald-500" />

              {sent ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-[22px] font-bold text-slate-100 mb-3 font-outfit">Messaggio inviato!</h3>
                  <p className="text-slate-400 text-[15px] font-outfit">Ti contatteremo entro 24 ore lavorative.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-400 mb-1.5 font-outfit">Nome e Cognome</label>
                    <input value={form.nome} onChange={(e) => update('nome', e.target.value)} placeholder="Mario Rossi" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-400 mb-1.5 font-outfit">Azienda</label>
                    <input value={form.azienda} onChange={(e) => update('azienda', e.target.value)} placeholder="Transport S.r.l." className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-400 mb-1.5 font-outfit">Email aziendale</label>
                    <input value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="mario@transport.it" type="email" className={inputClass} />
                    {emailError && <span className="text-red-400 text-xs mt-1 block font-outfit">{emailError}</span>}
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-400 mb-1.5 font-outfit">Numero veicoli in flotta</label>
                    <input value={form.veicoli} onChange={(e) => update('veicoli', e.target.value)} placeholder="es. 85" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[13px] font-semibold text-slate-400 mb-1.5 font-outfit">Messaggio (opzionale)</label>
                    <textarea
                      value={form.messaggio}
                      onChange={(e) => update('messaggio', e.target.value)}
                      placeholder="Raccontaci le tue esigenze..."
                      rows={4}
                      className={`${inputClass} resize-y`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      onClick={handleSubmit}
                      disabled={sending}
                      className={`w-full py-4 rounded-xl border-none bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit hover:shadow-lg hover:shadow-primary-500/25 transition-all ${sending ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {sending ? '⏳ Invio in corso...' : 'Invia Richiesta →'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-4">
              {infoCards.map((card, i) => (
                <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-[14px] border border-dark-border p-5 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: card.color }} />
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
