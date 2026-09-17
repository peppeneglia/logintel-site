import { useState, type FormEvent } from 'react'
import { supabase } from '../../lib/supabase'
import { isValidEmail } from '../../utils/validation'

export function LeadGate() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError('Inserisci un indirizzo email valido.')
      return
    }
    setError('')
    setSending(true)

    if (supabase) {
      const { error: insertError } = await supabase
        .from('leads')
        .insert({ email: email.trim(), source: 'route_predictor' })
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
    <div className="rounded-2xl border border-primary-500/20 bg-gradient-to-br from-primary-500/[0.06] to-emerald-500/[0.03] p-8 text-center">
      <h3 className="text-xl font-bold text-slate-100 mb-2.5 font-outfit">
        📄 Vuoi il report completo?
      </h3>
      <p className="text-slate-400 text-[15px] mb-6 font-outfit">
        Inserisci la tua email aziendale per ricevere il report PDF con tutti i dettagli e le raccomandazioni operative.
      </p>

      {sent ? (
        <p className="text-emerald-500 text-sm font-outfit">
          ✅ Grazie! Riceverai il report all'indirizzo indicato.
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex gap-3 justify-center max-w-[500px] mx-auto flex-wrap">
          <label htmlFor="lead-email" className="sr-only">Email aziendale</label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@azienda.it"
            className="flex-1 min-w-[220px] px-[18px] py-3.5 rounded-[10px] border border-dark-border bg-white/5 text-slate-100 text-[15px] outline-none font-outfit placeholder:text-slate-500/60 focus:border-primary-500/50 transition-colors"
          />
          <button
            type="submit"
            disabled={sending}
            className={`px-7 py-3.5 rounded-[10px] bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-[15px] border-none font-outfit whitespace-nowrap hover:shadow-lg hover:shadow-primary-500/25 transition-all ${sending ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {sending ? '⏳ Invio...' : 'Invia Report 📤'}
          </button>
          {error && (
            <p role="alert" className="w-full text-red-400 text-sm mt-1 font-outfit">{error}</p>
          )}
        </form>
      )}
    </div>
  )
}
