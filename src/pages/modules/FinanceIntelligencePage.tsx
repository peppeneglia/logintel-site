import { useEffect } from 'react'

const features = [
  { icon: '⛽', title: 'Costi carburante', desc: 'Consumo per veicolo, per rotta, per autista. Confronta i costi e identifica le inefficienze.' },
  { icon: '🛣️', title: 'Pedaggi per rotta', desc: 'Calcolo automatico pedaggi autostradali per ogni percorso. Confronta alternative e risparmia.' },
  { icon: '📊', title: 'Margini operativi', desc: 'Ricavi vs costi per ogni missione. Sai subito quali rotte rendono e quali no.' },
  { icon: '💳', title: 'Budget tracking', desc: 'Budget mensile per voce di spesa. Alert quando ti avvicini al limite. Controllo totale.' },
]

export function FinanceIntelligencePage() {
  useEffect(() => {
    document.title = 'Finance Intelligence — Logintel'
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
          <span className="bg-gradient-to-r from-cyan-400 to-primary-400 bg-clip-text text-transparent">Finance Intelligence</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-[640px] mx-auto leading-relaxed font-outfit">
          Analisi costi carburante, pedaggi e margini per rotta. Controllo spese in tempo reale per la tua flotta.
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
              <strong className="text-slate-100">Scenario:</strong> A fine mese vuoi sapere quali rotte sono state profittevoli e quali no. Hai 200 missioni completate.
            </p>
            <p className="text-slate-300 text-base leading-relaxed font-outfit mb-4">
              <strong className="text-slate-100">Con Finance Intelligence:</strong> Chiedi alla chat "quali sono le 5 rotte meno profittevoli di questo mese?" e ricevi la classifica con costi, ricavi e margine per ognuna.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed font-outfit">
              Dati chiari, decisioni migliori. Basta fogli di calcolo infiniti.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 70%), #0f172a' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mb-5 font-outfit tracking-tight">
            Prova Finance Intelligence
          </h2>
          <p className="text-slate-400 text-[17px] mb-9 leading-relaxed font-outfit">
            Controlla costi e margini della tua flotta. Provalo subito nella web app.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://app.logintel.it?demo=true" target="_blank" rel="noopener noreferrer" className="no-underline inline-block px-9 py-4 rounded-xl bg-white/5 border border-white/12 text-slate-100 font-semibold text-base font-outfit hover:bg-white/10 transition-all">
              Guarda la demo
            </a>
            <a href="https://app.logintel.it" target="_blank" rel="noopener noreferrer" className="no-underline inline-block px-9 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit shadow-[0_4px_24px_rgba(16,185,129,0.3)] transition-all">
              Accedi alla web app
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
