import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const pillars = [
  { icon: '🧠', title: 'Smart Heuristics', desc: 'Non semplici regole if/else. Funzioni multifattoriali che combinano meteo, tipo strada, altitudine, orario e stagione con pesi configurabili.', color: '#3b82f6' },
  { icon: '🎯', title: 'Confidence Score', desc: 'Ogni predizione ha un punteggio di affidabilità (0-100%) basato su orizzonte temporale, stabilità meteo, storico e completezza dati.', color: '#10b981' },
  { icon: '📈', title: 'Calibrazione Continua', desc: 'I coefficienti migliorano nel tempo. Il sistema confronta le predizioni con i ritardi reali riportati e aggiusta i parametri settimanalmente.', color: '#f59e0b' },
  { icon: '💰', title: 'Zero Costi Infrastruttura', desc: 'Solo fonti dati gratuite: Open-Meteo, OpenRouteService. Nessun costo per dati satellitari o licenze. Il valore è nella nostra logica.', color: '#8b5cf6' },
]

const flowSteps = [
  { num: '1', label: 'Ricezione richiesta', icon: '📥' },
  { num: '2', label: 'Calcolo percorso', icon: '🗺️' },
  { num: '3', label: 'Campionamento punti', icon: '📍' },
  { num: '4', label: 'Dati meteo per punto', icon: '🌦️' },
  { num: '5', label: 'Arricchimento contesto', icon: '🏔️' },
  { num: '6', label: 'Applicazione heuristics', icon: '🧠' },
  { num: '7', label: 'Confidence score', icon: '🎯' },
  { num: '8', label: 'Rotte alternative', icon: '🔀' },
  { num: '9', label: 'Risposta', icon: '📤' },
]

const codeExample = `// POST /v1/predictions
{
  "origin": { "lat": 45.4642, "lon": 9.1900 },
  "destination": { "lat": 41.9028, "lon": 12.4964 },
  "departure_time": "2026-02-16T14:00:00+01:00",
  "include_alternatives": true
}

// Response
{
  "prediction": {
    "total_delay_minutes": 27,
    "confidence_score": 0.82,
    "severity": "moderate",
    "segments": [
      {
        "km": 234,
        "weather": "Temporale",
        "delay_minutes": 12,
        "severity": "high"
      }
    ]
  },
  "alternative": {
    "name": "Via A14 Adriatica",
    "savings_minutes": 19
  }
}`

export function ComeFunzionaPage() {
  useEffect(() => {
    document.title = 'Come Funziona — Logintel'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.1) 0%, transparent 60%), #0f172a' }}>
        <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Architettura</span>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-slate-100 mt-3 mb-5 font-outfit tracking-tight">Come funziona Logintel</h1>
        <p className="text-slate-400 text-lg max-w-[640px] mx-auto leading-relaxed font-outfit">
          Un sistema di predizione intelligente che combina dati meteo, caratteristiche del percorso e feedback reale per stimare i ritardi prima della partenza.
        </p>
      </section>

      {/* Flow */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-12 text-center font-outfit">Il flusso di una predizione</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-dark-card to-dark rounded-xl border border-dark-border px-5 py-4 flex items-center gap-2.5 min-w-[180px]">
                  <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-base shrink-0">{step.icon}</div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-bold font-outfit">STEP {step.num}</div>
                    <div className="text-[13px] text-slate-100 font-semibold font-outfit">{step.label}</div>
                  </div>
                </div>
                {i < flowSteps.length - 1 && <span className="text-slate-500 text-lg hidden sm:inline">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-12 text-center font-outfit">I 4 pilastri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: p.color }} />
                <div className="text-[32px] mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold text-slate-100 mb-2.5 font-outfit">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-outfit">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-4 text-center font-outfit">Esempio concreto</h2>
          <p className="text-slate-400 text-center mb-10 text-base font-outfit">Milano → Roma, partenza domani alle 14:00</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '⛈️', label: 'Temporale al km 234', detail: 'Ore 16:30, severità alta', color: '#ef4444' },
              { icon: '⏱️', label: '+27 min ritardo totale', detail: 'Confidence: 82%', color: '#f59e0b' },
              { icon: '🔀', label: 'Alternativa via A14', detail: '19 minuti di risparmio', color: '#10b981' },
            ].map((ex, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-[14px] border border-dark-border p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: ex.color }} />
                <div className="text-[28px] mb-3">{ex.icon}</div>
                <div className="text-base font-bold text-slate-100 mb-1.5 font-outfit">{ex.label}</div>
                <div className="text-sm text-slate-400 font-outfit">{ex.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Snippet */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-4 text-center font-outfit">Per sviluppatori</h2>
          <p className="text-slate-400 text-center mb-8 text-base font-outfit">Un endpoint. Una predizione. Integrazione in 30 minuti.</p>

          <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 to-purple-500" />
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold text-primary-400 font-outfit">API Example</span>
              <span className="text-xs text-slate-500 font-mono">POST /v1/predictions</span>
            </div>
            <pre className="text-slate-300 text-[13px] leading-relaxed font-mono whitespace-pre-wrap overflow-auto m-0">
              {codeExample}
            </pre>
          </div>

          <div className="text-center mt-8">
            <Link to="/route-predictor" className="no-underline inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-[15px] font-outfit hover:shadow-lg hover:shadow-primary-500/25 transition-all">
              Prova dal vivo →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}