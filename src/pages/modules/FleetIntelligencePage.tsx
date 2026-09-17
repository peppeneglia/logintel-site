import { usePageTitle } from '../../hooks/usePageTitle'
import { APP_URL, APP_DEMO_URL } from '../../config'

const features = [
  { icon: '🚛', title: 'Dashboard veicoli', desc: 'Panoramica in tempo reale di tutta la flotta: posizione, stato, chilometraggio e disponibilità di ogni mezzo.' },
  { icon: '🔧', title: 'Manutenzione preventiva', desc: 'Alert automatici basati su chilometraggio, ore di utilizzo e storico guasti. Mai più fermi imprevisti.' },
  { icon: '📊', title: 'Allocazione risorse', desc: 'Assegna il veicolo giusto alla missione giusta. Ottimizza l\'utilizzo della flotta e riduci i costi.' },
  { icon: '📈', title: 'Analisi costi flotta', desc: 'TCO per veicolo, costo per km, confronto tra mezzi. Dati chiari per decisioni informate.' },
]

export function FleetIntelligencePage() {
  usePageTitle('Fleet Intelligence — Logintel')

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(6,182,212,0.1) 0%, transparent 60%), #0f172a' }}>
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/25 rounded-full px-4 py-1.5 mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-primary-400 text-xs font-semibold font-outfit">Modulo attivo</span>
        </div>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-slate-100 mt-3 mb-5 font-outfit tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-primary-400 bg-clip-text text-transparent">Fleet Intelligence</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-[640px] mx-auto leading-relaxed font-outfit">
          Gestione completa della flotta: veicoli, manutenzione, allocazione e costi. Tutto in un'unica dashboard.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-12 text-center font-outfit">Funzionalità principali</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
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
              <strong className="text-slate-100">Scenario:</strong> Hai 30 veicoli. Tre sono vicini al tagliando, uno ha un pneumatico da sostituire, due sono sottoutilizzati.
            </p>
            <p className="text-slate-300 text-base leading-relaxed font-outfit mb-4">
              <strong className="text-slate-100">Con Fleet Intelligence:</strong> Chiedi alla chat AI "quali veicoli hanno bisogno di manutenzione questa settimana?" e ricevi la lista con priorità, costi stimati e slot disponibili in officina.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed font-outfit">
              Niente fogli Excel, niente post-it. Un unico punto di controllo per tutta la flotta.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 70%), #0f172a' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mb-5 font-outfit tracking-tight">
            Prova Fleet Intelligence
          </h2>
          <p className="text-slate-400 text-[17px] mb-9 leading-relaxed font-outfit">
            Gestisci la tua flotta in modo intelligente. Provalo subito nella web app.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={APP_DEMO_URL} target="_blank" rel="noopener noreferrer" className="no-underline inline-block px-9 py-4 rounded-xl bg-white/5 border border-white/12 text-slate-100 font-semibold text-base font-outfit hover:bg-white/10 transition-all">
              Guarda la demo
            </a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="no-underline inline-block px-9 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit shadow-[0_4px_24px_rgba(16,185,129,0.3)] transition-all">
              Accedi alla web app
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
