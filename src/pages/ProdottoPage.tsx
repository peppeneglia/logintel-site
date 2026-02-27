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
    color: '#06b6d4',
    ready: false,
    features: ['Dashboard veicoli', 'Alert manutenzione', 'Allocazione risorse', 'Analisi costi flotta'],
  },
  {
    icon: '📦',
    title: 'Delivery Intelligence',
    desc: 'Ottimizzazione consegne, tracking ultimo miglio e gestione tempi di carico/scarico.',
    color: '#06b6d4',
    ready: false,
    features: ['Tracking consegne', 'Ottimizzazione giri', 'Tempi carico/scarico', 'Performance corrieri'],
  },
  {
    icon: '📋',
    title: 'Compliance Intelligence',
    desc: 'Monitoraggio automatico ore di guida, riposi obbligatori e normative europee.',
    color: '#06b6d4',
    ready: false,
    features: ['Ore di guida', 'Riposi obbligatori', 'Alert scadenze', 'Report normativo'],
  },
  {
    icon: '💰',
    title: 'Finance Intelligence',
    desc: 'Analisi costi carburante, pedaggi e margini per rotta. Controllo spese in tempo reale.',
    color: '#06b6d4',
    ready: false,
    features: ['Costi carburante', 'Pedaggi per rotta', 'Margini operativi', 'Budget tracking'],
  },
  {
    icon: '🌱',
    title: 'Carbon Intelligence',
    desc: 'Calcolo e ottimizzazione dell\'impronta CO₂ per ogni trasporto. Report ESG automatici.',
    color: '#06b6d4',
    ready: false,
    features: ['Calcolo CO₂ per rotta', 'Ottimizzazione emissioni', 'Report ESG', 'Benchmark flotta'],
  },
]

export function ProdottoPage() {
  useEffect(() => {
    document.title = 'Prodotto — Logintel'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.1) 0%, transparent 60%), #0f172a' }}>
        <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Prodotto</span>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-slate-100 mt-3 mb-5 font-outfit tracking-tight">
          La piattaforma per il{' '}
          <span className="bg-gradient-to-r from-primary-400 to-cyan-500 bg-clip-text text-transparent">fleet management intelligente</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-[640px] mx-auto leading-relaxed font-outfit">
          Un SaaS con interfaccia conversazionale AI e 6 moduli verticali per gestire ogni aspetto della tua flotta. Dalla predizione dei ritardi alla gestione dei costi.
        </p>
      </section>

      {/* Chat AI */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Interfaccia</span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mt-3 font-outfit tracking-tight">Chat AI con moduli integrati</h2>
          </div>

          {/* Chat mockup */}
          <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />
            <div className="space-y-5">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-primary-500/15 border border-primary-500/25 rounded-2xl rounded-tr-sm px-5 py-3 max-w-[80%]">
                  <p className="text-slate-200 text-sm font-outfit">Quanto ritardo avrò domani sulla Milano-Roma partendo alle 14?</p>
                </div>
              </div>
              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-white/5 border border-dark-border rounded-2xl rounded-tl-sm px-5 py-3 max-w-[80%]">
                  <p className="text-slate-300 text-sm font-outfit mb-3">Ho analizzato il percorso. Ci sono temporali previsti in Appennino intorno alle 16:30. Ecco il dettaglio:</p>
                  {/* Mini artifact preview */}
                  <div className="bg-dark/60 rounded-xl border border-dark-border/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-primary-400 font-outfit">ROUTE INTELLIGENCE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <div className="text-lg font-extrabold text-red-400 font-outfit">+27 min</div>
                        <div className="text-[11px] text-slate-500 font-outfit">Ritardo previsto</div>
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-primary-400 font-outfit">82%</div>
                        <div className="text-[11px] text-slate-500 font-outfit">Confidence</div>
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-cyan-400 font-outfit">-19 min</div>
                        <div className="text-[11px] text-slate-500 font-outfit">Via A14</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-center mt-6 text-[15px] leading-relaxed font-outfit">
            Scrivi in linguaggio naturale. La chat AI è gratuita — le attività avanzate consumano crediti in base alla loro complessità.
          </p>
        </div>
      </section>

      {/* 6 Moduli Verticali */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Moduli verticali</span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mt-3 font-outfit tracking-tight">6 moduli, un'unica piattaforma</h2>
            <p className="text-slate-400 text-base mt-4 max-w-[600px] mx-auto font-outfit">
              Ogni modulo copre un aspetto del fleet management. Route Intelligence è operativo — gli altri sono in sviluppo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((item, i) => {
              const Wrapper = item.link ? Link : 'div'
              const wrapperProps = item.link ? { to: item.link, className: 'no-underline block' } : {}
              return (
                <Wrapper key={i} {...wrapperProps as any}>
                  <div className={`relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden h-full ${item.link ? 'hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer' : ''}`}>
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
                    {item.link && (
                      <div className="mt-4 text-sm font-bold text-primary-400 font-outfit">Scopri come funziona →</div>
                    )}
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* Route Intelligence Demo */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Demo</span>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mt-3 mb-4 font-outfit tracking-tight">Prova Route Intelligence</h2>
          <p className="text-slate-400 text-[17px] leading-relaxed font-outfit mb-8">
            Il modulo Route Intelligence è già operativo. Inserisci una rotta e ricevi una predizione reale in 30 secondi.
          </p>
          <Link to="/route-predictor" className="no-underline inline-block px-9 py-4 rounded-xl bg-white/5 border border-white/12 text-slate-100 font-bold text-base font-outfit hover:bg-white/10 transition-all">
            Prova il Route Predictor →
          </Link>
        </div>
      </section>

      {/* Sistema crediti */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Pricing</span>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mt-3 mb-6 font-outfit tracking-tight">Primo mese gratuito</h2>
          <p className="text-slate-400 text-[17px] leading-relaxed font-outfit mb-10">
            Nessuna carta di credito richiesta. Provi tutti i moduli per 30 giorni e decidi.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#10b981' }} />
              <div className="text-[32px] mb-3">💬</div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 font-outfit">Chat AI</h3>
              <div className="text-2xl font-extrabold text-primary-400 mb-2 font-outfit">Gratis</div>
              <p className="text-slate-400 text-sm leading-relaxed font-outfit">Domande generali, consigli, informazioni. Sempre inclusa.</p>
            </div>
            <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#06b6d4' }} />
              <div className="text-[32px] mb-3">🎯</div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 font-outfit">Attività</h3>
              <div className="text-2xl font-extrabold text-cyan-400 mb-2 font-outfit">Crediti</div>
              <p className="text-slate-400 text-sm leading-relaxed font-outfit">Ogni attività consuma crediti in base alla complessità: predizioni, confronti, report.</p>
            </div>
            <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />
              <div className="text-[32px] mb-3">📊</div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 font-outfit">Trasparente</h3>
              <div className="text-2xl font-extrabold text-slate-100 mb-2 font-outfit">Vedi tutto</div>
              <p className="text-slate-400 text-sm leading-relaxed font-outfit">Sai sempre quanti crediti hai e quanto consuma ogni operazione. Zero sorprese.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.15) 0%, transparent 70%), #0f172a' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mb-5 font-outfit tracking-tight">
            Inizia gratuitamente
          </h2>
          <p className="text-slate-400 text-[17px] mb-9 leading-relaxed font-outfit">
            Il primo mese è gratis. Nessuna carta di credito. Provi e decidi.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contatti" className="no-underline px-9 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit shadow-[0_4px_24px_rgba(16,185,129,0.3)] transition-all">
              Prova gratis
            </Link>
            <Link to="/pricing" className="no-underline px-9 py-4 rounded-xl bg-white/5 border border-white/12 text-slate-100 font-semibold text-base font-outfit hover:bg-white/10 transition-all">
              Vedi i piani
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
