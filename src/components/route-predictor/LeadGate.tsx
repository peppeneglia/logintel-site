import { useState } from 'react'
import { supabase } from '../../lib/supabase'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function LeadGate() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setError('Inserisci un indirizzo email valido.')
      return
    }
    setError('')

    if (supabase) {
      try {
        await supabase.from('leads').insert({ email, source: 'route_predictor' })
      } catch {
        // Silent fallback
      }
    }
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

      <div className="flex gap-3 justify-center max-w-[500px] mx-auto flex-wrap">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nome@azienda.it"
          type="email"
          className="flex-1 min-w-[220px] px-[18px] py-3.5 rounded-[10px] border border-dark-border bg-white/5 text-slate-100 text-[15px] outline-none font-outfit placeholder:text-slate-500/60 focus:border-primary-500/50 transition-colors"
        />
        <button
          onClick={handleSubmit}
          className="px-7 py-3.5 rounded-[10px] bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-[15px] border-none cursor-pointer font-outfit whitespace-nowrap hover:shadow-lg hover:shadow-primary-500/25 transition-all"
        >
          Invia Report 📤
        </button>
      </div>

      {error && (
        <p className="text-red-400 text-sm mt-3 font-outfit">{error}</p>
      )}

      {sent && (
        <p className="text-emerald-500 text-sm mt-4 font-outfit">
          ✅ Grazie! Riceverai il report all'indirizzo indicato.
        </p>
      )}
    </div>
  )
}
