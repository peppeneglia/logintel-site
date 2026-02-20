import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  { icon: '📍', title: 'Inserisci la rotta', desc: 'Partenza, destinazione e orario di partenza. Il sistema calcola il percorso ottimale.' },
  { icon: '🛰️', title: 'Analisi meteo lungo il percorso', desc: 'Ogni 50km campioniamo le condizioni meteo previste all\'ora di transito del veicolo.' },
  { icon: '⚡', title: 'Predizione + alternativa', desc: 'Ritardo stimato con confidence score, più una rotta alternativa se conviene.' },
]

const comparisons = [
  { feature: 'Predizione ritardo route-specific', us: true, meteo: false, gps: false, traffic: false },
  { feature: 'Meteo lungo il percorso (non generico)', us: true, meteo: false, gps: false, traffic: false },
  { feature: 'Rotte alternative con confronto tempi', us: true, meteo: false, gps: false, traffic: true },
  { feature: 'Confidence score per ogni predizione', us: true, meteo: false, gps: false, traffic: false },
  { feature: 'Calibrazione con feedback reale', us: true, meteo: false, gps: false, traffic: false },
  { feature: 'Integrazione API in 30 minuti', us: true, meteo: true, gps: false, traffic: true },
]

const trustCards = [
  { icon: '🛰️', title: 'Predittivo, non reattivo', desc: 'Non ti diciamo il meteo. Ti diciamo quanto ritardo avrai e cosa fare.' },
  { icon: '📡', title: 'Zero hardware', desc: 'API pura. Niente dispositivi da installare sui veicoli. Si integra con i tuoi sistemi.' },
  { icon: '⚡', title: 'Integrazione in 30 min', desc: 'REST API con documentazione completa. Un endpoint, una predizione.' },
  { icon: '🎯', title: 'Calibrazione continua', desc: 'Il sistema impara dai feedback reali e migliora le predizioni nel tempo.' },
]

export function HomePage() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    document.title = 'Logintel — Predizioni Meteo per il Trasporto Merci'
  }, [])

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark pt-[120px] pb-20 px-6"
        style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(16,185,129,0.08) 0%, transparent 60%), #0f172a' }}>
        {/* Grid bg */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-[900px] text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/25 rounded-full px-5 py-2 mb-7">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-primary-400 text-[13px] font-semibold font-outfit">Powered by NextOrbit · Deloitte</span>
          </div>

          <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold text-slate-100 leading-[1.1] mb-6 font-outfit tracking-tight">
            Il futuro della logistica è{' '}
            <span className="bg-gradient-to-r from-primary-500 to-emerald-500 bg-clip-text text-transparent">
              predittivo
            </span>
            , non reattivo
          </h1>

          <p className="text-[19px] text-slate-400 max-w-[640px] mx-auto mb-10 leading-relaxed font-outfit">
            Logintel predice ritardi meteo-correlati lungo il percorso del tuo camion e suggerisce rotte alternative. Prima che il problema accada.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/route-predictor" className="no-underline px-9 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit shadow-[0_4px_24px_rgba(59,130,246,0.3)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.4)] transition-all flex items-center gap-2">
              Prova il Route Predictor →
            </Link>
            <Link to="/come-funziona" className="no-underline px-9 py-4 rounded-xl bg-white/5 border border-white/12 text-slate-100 font-semibold text-base font-outfit hover:bg-white/10 transition-all">
              Come funziona
            </Link>
          </div>

          {/* Live stats */}
          <div className="flex justify-center gap-10 mt-16 flex-wrap">
            {[
              { val: '< 2s', label: 'Tempo risposta API' },
              { val: '72h', label: 'Orizzonte predittivo' },
              { val: '€0', label: 'Hardware richiesto' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[28px] font-extrabold text-slate-100 font-outfit">{s.val}</div>
                <div className="text-[13px] text-slate-500 mt-1 font-outfit">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className="bg-[#0c1322] py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-red-500 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Il problema</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-slate-100 mt-3 font-outfit tracking-tight">I camion partono alla cieca</h2>
            <p className="text-slate-400 max-w-[600px] mx-auto mt-4 text-[17px] leading-relaxed font-outfit">
              I sistemi attuali ti dicono "dove sei" ma non "cosa ti aspetta". Il risultato? Ritardi, costi extra e clienti insoddisfatti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '💸', value: '€82-85', unit: '/ora', desc: 'Costo operativo heavy-duty truck in Europa per ogni ora di ritardo', color: '#ef4444' },
              { icon: '⏱️', value: '€100', unit: '/ora', desc: 'Penali contrattuali in Italia per ritardi oltre 90 minuti al carico/scarico', color: '#f59e0b' },
              { icon: '📉', value: '€14-18B', unit: '/anno', desc: 'Sprechi evitabili nel mercato logistico europeo da €930 miliardi', color: '#3b82f6' },
            ].map((item, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: item.color }} />
                <div className="text-[32px] mb-4">{item.icon}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold font-outfit" style={{ color: item.color }}>{item.value}</span>
                  <span className="text-base text-slate-400 font-outfit">{item.unit}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-outfit">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION STEPS ═══ */}
      <section className="bg-dark py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-emerald-500 text-[13px] font-bold uppercase tracking-[2px] font-outfit">La soluzione</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-slate-100 mt-3 font-outfit tracking-tight">Come funziona in 3 step</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                onClick={() => setActiveTab(i)}
                className={`rounded-2xl p-8 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  activeTab === i
                    ? 'bg-gradient-to-br from-primary-500/10 to-emerald-500/5 border border-primary-500/30'
                    : 'bg-gradient-to-br from-dark-card to-dark border border-dark-border hover:border-dark-border/80'
                }`}
              >
                <div className={`absolute top-0 left-0 right-0 h-[3px] transition-all ${activeTab === i ? 'bg-gradient-to-r from-primary-500 to-emerald-500' : 'bg-transparent'}`} />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-[22px]">{s.icon}</div>
                  <span className="text-sm font-bold text-slate-500 font-outfit">STEP {i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2.5 font-outfit">{s.title}</h3>
                <p className="text-slate-400 text-[15px] leading-relaxed font-outfit">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIFFERENTIATION TABLE ═══ */}
      <section className="bg-[#0c1322] py-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Differenziazione</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-slate-100 mt-3 font-outfit tracking-tight">Nessuno fa quello che facciamo noi</h2>
          </div>

          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
          <div className="bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border overflow-hidden min-w-[600px]">
            {/* Header */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] px-6 py-4 border-b border-dark-border bg-primary-500/5">
              <div className="text-[13px] font-bold text-slate-500 font-outfit">FEATURE</div>
              <div className="text-[13px] font-bold text-primary-400 text-center font-outfit">LOGINTEL</div>
              <div className="text-[13px] font-bold text-slate-500 text-center font-outfit">API Meteo</div>
              <div className="text-[13px] font-bold text-slate-500 text-center font-outfit">GPS Track</div>
              <div className="text-[13px] font-bold text-slate-500 text-center font-outfit">API Traffico</div>
            </div>
            {comparisons.map((c, i) => (
              <div key={i} className={`grid grid-cols-[2fr_1fr_1fr_1fr_1fr] px-6 py-3.5 items-center ${i < comparisons.length - 1 ? 'border-b border-dark-border/40' : ''}`}>
                <div className="text-sm text-slate-100 font-outfit">{c.feature}</div>
                <div className="text-center text-lg">{c.us ? '✅' : '—'}</div>
                <div className="text-center text-lg text-slate-500">{c.meteo ? '✅' : '—'}</div>
                <div className="text-center text-lg text-slate-500">{c.gps ? '✅' : '—'}</div>
                <div className="text-center text-lg text-slate-500">{c.traffic ? '✅' : '—'}</div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST ═══ */}
      <section className="bg-dark py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((item, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 to-emerald-500" />
                <div className="text-[32px] mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-100 mb-2 font-outfit">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-outfit">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 70%), #0f172a' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mb-5 font-outfit tracking-tight">
            Pronto a vedere il futuro della tua rotta?
          </h2>
          <p className="text-slate-400 text-[17px] mb-9 leading-relaxed font-outfit">
            Prova il Route Predictor gratuitamente. Nessuna registrazione richiesta.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/route-predictor" className="no-underline px-9 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit shadow-[0_4px_24px_rgba(59,130,246,0.3)] transition-all">
              Prova il Route Predictor
            </Link>
            <Link to="/contatti" className="no-underline px-9 py-4 rounded-xl bg-white/5 border border-white/12 text-slate-100 font-semibold text-base font-outfit hover:bg-white/10 transition-all">
              Richiedi una demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}