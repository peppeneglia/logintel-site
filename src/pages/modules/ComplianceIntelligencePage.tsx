import { useEffect } from 'react'

const features = [
  { icon: '📋', title: 'Ore di guida', desc: 'Monitoraggio automatico delle ore di guida giornaliere e settimanali. Alert prima di sforare i limiti europei.' },
  { icon: '🛏️', title: 'Riposi obbligatori', desc: 'Tracciamento riposi giornalieri e settimanali. Il sistema ti avvisa quando un autista deve fermarsi.' },
  { icon: '🔔', title: 'Alert scadenze', desc: 'Patenti, CQC, revisioni, assicurazioni: tutte le scadenze in un unico calendario con notifiche anticipate.' },
  { icon: '📄', title: 'Report normativo', desc: 'Genera report conformi alla normativa europea. Pronti per ispezioni e controlli.' },
]

export function ComplianceIntelligencePage() {
  useEffect(() => {
    document.title = 'Compliance Intelligence — Logintel'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(6,182,212,0.1) 0%, transparent 60%), #0f172a' }}>
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/25 rounded-full px-4 py-1.5 mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-primary-400 text-xs font-semibold font-outfit">Modulo attivo</span>
        </div>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-slate-100 mt-3 mb-5 font-outfit tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-primary-400 bg-clip-text text-transparent">Compliance Intelligence</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-[640px] mx-auto leading-relaxed font-outfit">
          Monitoraggio automatico ore di guida, riposi obbligatori e normative europee. Zero rischi, zero sanzioni.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-12 text-center font-outfit">Funzionalità principali</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#10b981' }} />
                <div className="text-[32px] mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-slate-100 mb-2.5 font-outfit">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-outfit">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use case */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-6 text-center font-outfit">Caso d'uso</h2>
          <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#10b981' }} />
            <p className="text-slate-300 text-base leading-relaxed font-outfit mb-4">
              <strong className="text-slate-100">Scenario:</strong> Un autista è in viaggio da 8 ore. La consegna è tra 45 minuti. Può completarla o deve fermarsi?
            </p>
            <p className="text-slate-300 text-base leading-relaxed font-outfit mb-4">
              <strong className="text-slate-100">Con Compliance Intelligence:</strong> Chiedi alla chat "Marco può completare la consegna?" e ricevi la risposta con riferimento normativo, ore residue e il punto di sosta più vicino in caso di stop.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed font-outfit">
              Decisioni rapide, sempre conformi. Niente più calcoli manuali.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 70%), #0f172a' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mb-5 font-outfit tracking-tight">
            Prova Compliance Intelligence
          </h2>
          <p className="text-slate-400 text-[17px] mb-9 leading-relaxed font-outfit">
            Monitora ore di guida e normative in automatico. Provalo subito nella web app.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://logintel-app.vercel.app?demo=true" target="_blank" rel="noopener noreferrer" className="no-underline inline-block px-9 py-4 rounded-xl bg-white/5 border border-white/12 text-slate-100 font-semibold text-base font-outfit hover:bg-white/10 transition-all">
              Guarda la demo
            </a>
            <a href="https://logintel-app.vercel.app" target="_blank" rel="noopener noreferrer" className="no-underline inline-block px-9 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit shadow-[0_4px_24px_rgba(16,185,129,0.3)] transition-all">
              Accedi alla web app
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
