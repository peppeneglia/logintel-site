import { useEffect } from 'react'

const team = [
  {
    name: 'Giuseppe Neglia',
    role: 'CEO',
    desc: 'Product vision, architettura, strategia.',
    icon: '🎯',
    color: '#10b981',
  },
  {
    name: 'Luigi Antonio Leccese',
    role: 'CSO',
    desc: 'Sales, customer validation, strategia commerciale.',
    icon: '📈',
    color: '#10b981',
  },
  {
    name: 'Vittorio D\'Alba',
    role: 'CTO',
    desc: 'Sviluppo tecnico, infrastruttura.',
    icon: '⚡',
    color: '#10b981',
  },
]

export function ChiSiamoPage() {
  useEffect(() => {
    document.title = 'Chi Siamo — Logintel'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.1) 0%, transparent 60%), #0f172a' }}>
        <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Chi siamo</span>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-slate-100 mt-3 mb-5 font-outfit tracking-tight">
          L'assistente AI per chi gestisce flotte in Europa
        </h1>
      </section>

      {/* Missione */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />
            <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">La nostra missione</span>
            <p className="text-slate-300 text-[17px] leading-relaxed mt-4 font-outfit">
              I fleet manager europei gestiscono flotte con strumenti frammentati: fogli Excel, telefonate, app scollegate. Perdono tempo a cercare informazioni invece di prendere decisioni.
            </p>
            <p className="text-slate-300 text-[17px] leading-relaxed mt-4 font-outfit">
              Logintel riunisce tutto in un'unica piattaforma con un assistente AI conversazionale. Rotte, costi, manutenzione, compliance, emissioni — chiedi e ricevi risposte operative in secondi.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Team</span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mt-3 font-outfit tracking-tight">I co-founder</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden text-center">
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: member.color }} />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-700/20 border border-primary-500/20 flex items-center justify-center text-[32px] mx-auto mb-4">
                  {member.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100 font-outfit">{member.name}</h3>
                <div className="text-sm font-bold mt-1 font-outfit" style={{ color: member.color }}>{member.role}</div>
                <p className="text-slate-400 text-sm leading-relaxed mt-3 font-outfit">{member.desc}</p>
                <p className="text-slate-500 text-xs mt-2 font-outfit">Bari, Italia</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NextOrbit / Deloitte */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-[22px]">🚀</div>
              <div>
                <h3 className="text-lg font-bold text-slate-100 font-outfit">NextOrbit by Deloitte</h3>
                <span className="text-sm text-slate-400 font-outfit">Programma di incubazione</span>
              </div>
            </div>
            <p className="text-slate-300 text-[15px] leading-relaxed font-outfit">
              Logintel è parte di NextOrbit, il programma di incubazione di Deloitte. Accesso a mentorship, network e supporto strategico per portare il prodotto sul mercato europeo.
            </p>
          </div>
        </div>
      </section>

      {/* Il nome */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Il nome</span>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mt-3 mb-6 font-outfit tracking-tight">
            <span className="bg-gradient-to-r from-primary-400 to-cyan-500 bg-clip-text text-transparent">Log</span>istics +{' '}
            <span className="bg-gradient-to-r from-primary-400 to-cyan-500 bg-clip-text text-transparent">Intel</span>ligence
          </h2>
          <p className="text-slate-400 text-[17px] leading-relaxed font-outfit">
            Logintel nasce dall'unione di logistics e intelligence. Il nostro obiettivo: rendere ogni decisione logistica più informata, predittiva e intelligente.
          </p>
        </div>
      </section>
    </div>
  )
}
