import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const pillars = [
  { icon: '🧠', title: 'Smart Heuristics', desc: 'Non un punto meteo generico, ma l\'analisi di ogni segmento del tuo percorso. Precipitazioni, vento, visibilità, altitudine, tipo di strada e orario combinati.', color: '#10b981' },
  { icon: '🎯', title: 'Confidence Score', desc: 'Ogni predizione ha un punteggio 0-100% che ti dice quanto fidarti. Basato su orizzonte temporale, stabilità meteo e completezza dati.', color: '#10b981' },
  { icon: '📈', title: 'Calibrazione Continua', desc: 'I coefficienti migliorano nel tempo. Il sistema confronta le predizioni con i ritardi reali riportati e aggiusta i parametri settimanalmente.', color: '#10b981' },
  { icon: '🌐', title: 'Fonti dati aperte', desc: 'Open-Meteo per il meteo, OpenRouteService per i percorsi, Open-Elevation per l\'altimetria. Dati affidabili, zero licenze.', color: '#10b981' },
]

const flowSteps = [
  { num: '1', label: 'Inserisci la tua rotta', icon: '📍', desc: 'Origine, destinazione e orario. Da form o dalla chat AI.' },
  { num: '2', label: 'Analizziamo il meteo lungo il percorso', icon: '🛰️', desc: 'Ogni 50 km, controlliamo precipitazioni, vento, visibilità, altitudine e tipo di strada.' },
  { num: '3', label: 'Ricevi la predizione', icon: '⚡', desc: 'Ritardo in minuti, confidence score, rotta alternativa e consiglio operativo.' },
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
    document.title = 'Route Intelligence — Logintel'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.1) 0%, transparent 60%), #0f172a' }}>
        <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Route Intelligence</span>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-slate-100 mt-3 mb-5 font-outfit tracking-tight">
          Come funziona{' '}
          <span className="bg-gradient-to-r from-primary-400 to-cyan-500 bg-clip-text text-transparent">Route Intelligence</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-[640px] mx-auto leading-relaxed font-outfit">
          Combiniamo dati meteo, caratteristiche del percorso e feedback reale per dirti quanto ritardo aspettarti — prima di partire.
        </p>
      </section>

      {/* Flow — 3 step visivi */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-12 text-center font-outfit">Il flusso di una predizione</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flowSteps.map((step, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-8 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-[22px]">{step.icon}</div>
                  <span className="text-sm font-bold text-slate-500 font-outfit">STEP {step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2.5 font-outfit">{step.label}</h3>
                <p className="text-slate-400 text-[15px] leading-relaxed font-outfit">{step.desc}</p>
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
              { icon: '⏱️', label: '+27 min ritardo totale', detail: 'Confidence: 82%', color: '#ef4444' },
              { icon: '🔀', label: 'Alternativa via A14', detail: '19 minuti di risparmio', color: '#06b6d4' },
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
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-4 text-center font-outfit">Anche via API</h2>
          <p className="text-slate-400 text-center mb-8 text-base font-outfit">
            Logintel è prima di tutto un SaaS con interfaccia web. Ma per chi vuole integrare le predizioni nei propri sistemi, offriamo anche un'API REST.
          </p>

          <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold text-primary-400 font-outfit">API Example</span>
              <span className="text-xs text-slate-500 font-mono">POST /v1/predictions</span>
            </div>
            <pre className="text-slate-300 text-[13px] leading-relaxed font-mono whitespace-pre-wrap overflow-auto m-0">
              {codeExample}
            </pre>
          </div>

          <div className="text-center mt-8">
            <Link to="/prodotto" className="no-underline inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-[15px] font-outfit hover:shadow-lg hover:shadow-primary-500/25 transition-all">
              Scopri il prodotto →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
