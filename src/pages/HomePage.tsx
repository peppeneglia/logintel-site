import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  { icon: '💬', title: 'Apri la chat', desc: 'Accedi alla web app e scrivi quello che ti serve in linguaggio naturale. Come parlare con un collega.' },
  { icon: '🧠', title: 'L\'AI analizza e risponde', desc: 'L\'assistente capisce la tua richiesta, interroga i moduli giusti e ti restituisce una risposta operativa.' },
  { icon: '⚡', title: 'Agisci subito', desc: 'Ricevi dati, report, alert e suggerimenti pronti all\'uso. Nessuna configurazione, nessun manuale.' },
]

const modules = [
  { icon: '📍', title: 'Route Intelligence', desc: 'Predizioni meteo-correlate, rotte alternative, confronto percorsi e report ETA realistici.', color: '#10b981', ready: true, link: '/route-intelligence' },
  { icon: '🚛', title: 'Fleet Intelligence', desc: 'Gestione veicoli, manutenzione preventiva e allocazione risorse della flotta.', color: '#06b6d4', ready: false, link: '/fleet-intelligence' },
  { icon: '📦', title: 'Delivery Intelligence', desc: 'Ottimizzazione consegne e tracking ultimo miglio.', color: '#06b6d4', ready: false, link: '/delivery-intelligence' },
  { icon: '📋', title: 'Compliance Intelligence', desc: 'Monitoraggio ore di guida, riposi e normative europee.', color: '#06b6d4', ready: false, link: '/compliance-intelligence' },
  { icon: '💰', title: 'Finance Intelligence', desc: 'Analisi costi carburante, pedaggi e margini per rotta.', color: '#06b6d4', ready: false, link: '/finance-intelligence' },
  { icon: '🌱', title: 'Carbon Intelligence', desc: 'Calcolo e ottimizzazione dell\'impronta CO₂ per trasporto.', color: '#06b6d4', ready: false, link: '/carbon-intelligence' },
]

const trustCards = [
  { icon: '🧠', title: 'AI conversazionale', desc: 'Scrivi in linguaggio naturale. L\'assistente capisce il contesto e ti dà risposte operative, non dati grezzi.' },
  { icon: '📡', title: 'Zero hardware', desc: 'Apri il browser e hai tutto. Niente dispositivi, niente installazioni, niente IT.' },
  { icon: '🔗', title: 'Una sola piattaforma', desc: 'Rotte, costi, manutenzione, compliance: tutto in un unico posto. Basta frammentare le informazioni.' },
  { icon: '📈', title: 'Migliora nel tempo', desc: 'Il sistema impara dai dati della tua flotta e affina le risposte settimana dopo settimana.' },
]

export function HomePage() {
  useEffect(() => {
    document.title = 'Logintel — L\'assistente intelligente del fleet manager europeo'
  }, [])

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark pt-[120px] pb-20 px-6"
        style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(6,182,212,0.08) 0%, transparent 60%), #0f172a' }}>
        {/* Grid bg */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-[900px] text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/25 rounded-full px-5 py-2 mb-7">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-primary-400 text-[13px] font-semibold font-outfit">Powered by NextOrbit · Deloitte</span>
          </div>

          <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold text-slate-100 leading-[1.1] mb-6 font-outfit tracking-tight">
            L'assistente{' '}
            <span className="bg-gradient-to-r from-primary-400 to-cyan-500 bg-clip-text text-transparent">
              intelligente
            </span>
            {' '}di ogni{' '}
            <span className="bg-gradient-to-r from-primary-400 to-cyan-500 bg-clip-text text-transparent">
              fleet manager
            </span>
            {' '}europeo
          </h1>

          <p className="text-[19px] text-slate-400 max-w-[640px] mx-auto mb-10 leading-relaxed font-outfit">
            Rotte, costi, compliance e molto altro: tutto in un'unica app.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/web-app" className="no-underline px-9 py-4 rounded-xl bg-white/5 border border-white/12 text-slate-100 font-semibold text-base font-outfit hover:bg-white/10 transition-all">
              Scopri la Web App
            </Link>
            <a href="https://logintel-app.vercel.app" target="_blank" rel="noopener noreferrer" className="no-underline px-9 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit shadow-[0_4px_24px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_32px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2">
              Guarda demo →
            </a>
          </div>

          {/* Live stats */}
          <div className="flex justify-center gap-10 mt-16 flex-wrap">
            {[
              { val: '1', label: 'Sola piattaforma' },
              { val: 'AI + 6', label: 'Moduli integrati' },
              { val: '24/7', label: 'Sempre disponibile' },
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
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-slate-100 mt-3 font-outfit tracking-tight">Il fleet manager lavora alla cieca</h2>
            <p className="text-slate-400 max-w-[600px] mx-auto mt-4 text-[17px] leading-relaxed font-outfit">
              Strumenti frammentati, dati sparsi su fogli Excel, decisioni prese a intuito. Il risultato? Costi fuori controllo e inefficienze ovunque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '🧩', value: '5-8', unit: ' tool', desc: 'Strumenti diversi usati in media da un fleet manager: fogli, app, telefonate, email. Nessuno parla con l\'altro.' },
              { icon: '⏱️', value: '40%', unit: '', desc: 'Del tempo di un fleet manager speso a cercare informazioni, non a prendere decisioni.' },
              { icon: '💸', value: '€15-20k', unit: '/anno', desc: 'Costi evitabili per flotta medio-piccola: manutenzioni tardive, rotte inefficienti, sanzioni compliance.' },
            ].map((item, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-500" />
                <div className="text-[32px] mb-4">{item.icon}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold font-outfit text-red-500">{item.value}</span>
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
            <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">La soluzione</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-primary-400 mt-3 font-outfit tracking-tight">Come funziona Logintel</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 relative overflow-hidden bg-gradient-to-br from-dark-card to-dark border border-dark-border"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />
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

      {/* ═══ MODULI VERTICALI ═══ */}
      <section className="bg-[#0c1322] py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Piattaforma</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-slate-100 mt-3 font-outfit tracking-tight">I moduli di Logintel</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((item, i) => (
              <Link key={i} to={item.link} className="no-underline block">
                <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden h-full hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
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
                  <p className="text-slate-400 text-sm leading-relaxed font-outfit">{item.desc}</p>
                  <div className="mt-4 text-sm font-bold font-outfit" style={{ color: item.color }}>Scopri di più →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST ═══ */}
      <section className="bg-dark py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Perché Logintel</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold text-slate-100 mt-3 font-outfit tracking-tight">Una piattaforma, zero complicazioni</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((item, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />
                <div className="text-[32px] mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-100 mb-2 font-outfit">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-outfit">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.15) 0%, transparent 70%), #0f172a' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mb-5 font-outfit tracking-tight">
            Inizia gratis, scala quando vuoi
          </h2>
          <p className="text-slate-400 text-[17px] mb-9 leading-relaxed font-outfit">
            Piano Free per sempre. Chat AI illimitata e 10 crediti al mese inclusi.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://logintel-app.vercel.app" target="_blank" rel="noopener noreferrer" className="no-underline px-9 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit shadow-[0_4px_24px_rgba(16,185,129,0.3)] transition-all">
              Guarda demo
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
