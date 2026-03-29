import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const modules = [
  {
    icon: '📍',
    title: 'Route Intelligence',
    desc: 'Predizioni meteo-correlate lungo il percorso, rotte alternative, confronto percorsi e report ETA weather-adjusted.',
    color: '#10b981',
    ready: true,
    link: '/route-intelligence',
    features: ['Predizione ritardo singola rotta', 'Piano settimanale con rischio per giorno', 'Confronto 2-3 percorsi alternativi', 'Report ETA condivisibile', 'Storico predizioni con feedback'],
  },
  {
    icon: '🚛',
    title: 'Fleet Intelligence',
    desc: 'Gestione veicoli, manutenzione preventiva, allocazione risorse e analisi costi flotta.',
    color: '#10b981',
    ready: true,
    link: '/fleet-intelligence',
    features: ['Dashboard veicoli', 'Alert manutenzione', 'Allocazione risorse', 'Analisi costi flotta'],
  },
  {
    icon: '📦',
    title: 'Delivery Intelligence',
    desc: 'Ottimizzazione consegne, tracking ultimo miglio e gestione tempi di carico/scarico.',
    color: '#10b981',
    ready: true,
    link: '/delivery-intelligence',
    features: ['Tracking consegne', 'Ottimizzazione giri', 'Tempi carico/scarico', 'Performance corrieri'],
  },
  {
    icon: '📋',
    title: 'Compliance Intelligence',
    desc: 'Monitoraggio automatico ore di guida, riposi obbligatori e normative europee.',
    color: '#10b981',
    ready: true,
    link: '/compliance-intelligence',
    features: ['Ore di guida', 'Riposi obbligatori', 'Alert scadenze', 'Report normativo'],
  },
  {
    icon: '💰',
    title: 'Finance Intelligence',
    desc: 'Analisi costi carburante, pedaggi e margini per rotta. Controllo spese in tempo reale.',
    color: '#10b981',
    ready: true,
    link: '/finance-intelligence',
    features: ['Costi carburante', 'Pedaggi per rotta', 'Margini operativi', 'Budget tracking'],
  },
  {
    icon: '🌱',
    title: 'Carbon Intelligence',
    desc: 'Calcolo e ottimizzazione dell\'impronta CO₂ per ogni trasporto. Report ESG automatici.',
    color: '#10b981',
    ready: true,
    link: '/carbon-intelligence',
    features: ['Calcolo CO₂ per rotta', 'Ottimizzazione emissioni', 'Report ESG', 'Benchmark flotta'],
  },
]

export function ModuliPage() {
  useEffect(() => {
    document.title = 'Moduli — Logintel'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.1) 0%, transparent 60%), #0f172a' }}>
        <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Piattaforma</span>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-slate-100 mt-3 mb-5 font-outfit tracking-tight">
          I{' '}
          <span className="bg-gradient-to-r from-primary-400 to-cyan-500 bg-clip-text text-transparent">6 moduli</span>
          {' '}di Logintel
        </h1>
        <p className="text-slate-400 text-lg max-w-[640px] mx-auto leading-relaxed font-outfit">
          Ogni modulo copre un aspetto del fleet management. Tutti e 6 i moduli sono operativi.
        </p>
      </section>

      {/* Modules Grid */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((item, i) => (
              <Link key={i} to={item.link} className="no-underline block">
                <div className={`relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden h-full hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer`}>
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: item.color }} />
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[32px]">{item.icon}</div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      item.ready
                        ? 'bg-primary-500/15 text-primary-400 border-primary-500/25'
                        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                    }`}>
                      {item.ready ? 'Attivo' : 'In arrivo'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2 font-outfit">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 font-outfit">{item.desc}</p>
                  <ul className="space-y-1.5">
                    {item.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-[13px] text-slate-400 font-outfit">
                        <span style={{ color: item.color }}>•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-sm font-bold font-outfit" style={{ color: item.color }}>Scopri di più →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.15) 0%, transparent 70%), #0f172a' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mb-5 font-outfit tracking-tight">
            Prova Logintel gratuitamente
          </h2>
          <p className="text-slate-400 text-[17px] mb-9 leading-relaxed font-outfit">
            Piano Free per sempre. Upgrade quando vuoi, downgrade quando vuoi.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://app.logintel.it?demo=true" target="_blank" rel="noopener noreferrer" className="no-underline px-9 py-4 rounded-xl bg-white/5 border border-white/12 text-slate-100 font-semibold text-base font-outfit hover:bg-white/10 transition-all">
              Guarda la demo
            </a>
            <a href="https://app.logintel.it" target="_blank" rel="noopener noreferrer" className="no-underline px-9 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit shadow-[0_4px_24px_rgba(16,185,129,0.3)] transition-all">
              Accedi alla web app
            </a>
            <Link to="/pricing" className="no-underline px-9 py-4 rounded-xl bg-white/5 border border-white/12 text-slate-100 font-semibold text-base font-outfit hover:bg-white/10 transition-all">
              Vedi i piani
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
