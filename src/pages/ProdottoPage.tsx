import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ProdottoPage() {
  useEffect(() => {
    document.title = 'Web App — Logintel'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.1) 0%, transparent 60%), #0f172a' }}>
        <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Web App</span>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-slate-100 mt-3 mb-5 font-outfit tracking-tight">
          Un assistente AI per il{' '}
          <span className="bg-gradient-to-r from-primary-400 to-cyan-500 bg-clip-text text-transparent">fleet management</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-[640px] mx-auto leading-relaxed font-outfit">
          Apri il browser, scrivi quello che ti serve, ricevi risposte operative. Un'interfaccia conversazionale con 6 moduli verticali integrati.
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
                  <p className="text-slate-200 text-sm font-outfit">Quali veicoli hanno la revisione in scadenza questo mese?</p>
                </div>
              </div>
              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-white/5 border border-dark-border rounded-2xl rounded-tl-sm px-5 py-3 max-w-[80%]">
                  <p className="text-slate-300 text-sm font-outfit mb-3">Ho controllato lo stato della flotta. Ci sono 3 veicoli con revisione in scadenza:</p>
                  {/* Mini artifact preview */}
                  <div className="bg-dark/60 rounded-xl border border-dark-border/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-primary-400 font-outfit">FLEET INTELLIGENCE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <div className="text-lg font-extrabold text-red-400 font-outfit">3</div>
                        <div className="text-[11px] text-slate-500 font-outfit">Revisioni in scadenza</div>
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-yellow-400 font-outfit">12 mar</div>
                        <div className="text-[11px] text-slate-500 font-outfit">Prima scadenza</div>
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-primary-400 font-outfit">2 slot</div>
                        <div className="text-[11px] text-slate-500 font-outfit">Officina disponibili</div>
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

      {/* Key points */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Esperienza</span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mt-3 font-outfit tracking-tight">Pensata per chi gestisce flotte</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '💬', title: 'Conversazionale', desc: 'Niente menu infiniti. Chiedi e ricevi. L\'AI capisce il contesto e usa il modulo giusto.', color: '#10b981' },
              { icon: '📱', title: 'Da browser', desc: 'Funziona su qualsiasi dispositivo. Apri il browser, accedi e lavori. Zero installazioni.', color: '#10b981' },
              { icon: '🔌', title: 'Zero integrazioni', desc: 'Non serve collegare ERP, TMS o altri sistemi. Logintel funziona standalone dal giorno zero.', color: '#10b981' },
              { icon: '🎯', title: 'Crediti trasparenti', desc: 'La chat è gratis. Le attività avanzate consumano crediti. Sai sempre quanto spendi.', color: '#10b981' },
              { icon: '📊', title: '6 moduli integrati', desc: 'Rotte, flotta, consegne, compliance, finanza, emissioni. Tutto accessibile da un\'unica interfaccia.', color: '#10b981' },
              { icon: '🔒', title: 'Dati tuoi', desc: 'I tuoi dati sono isolati e protetti. Nessuna condivisione con terzi, nessun lock-in.', color: '#10b981' },
            ].map((item, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: item.color }} />
                <div className="text-[32px] mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-100 mb-2 font-outfit">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-outfit">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema crediti */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Pricing</span>
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mt-3 mb-6 font-outfit tracking-tight">Piano Free per sempre</h2>
          <p className="text-slate-400 text-[17px] leading-relaxed font-outfit mb-10">
            Chat AI illimitata e 10 crediti al mese inclusi. Upgrade a Pro o Enterprise quando vuoi.
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
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#10b981' }} />
              <div className="text-[32px] mb-3">🎯</div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 font-outfit">Attività</h3>
              <div className="text-2xl font-extrabold text-primary-400 mb-2 font-outfit">Crediti</div>
              <p className="text-slate-400 text-sm leading-relaxed font-outfit">Ogni attività consuma crediti in base alla complessità: analisi, confronti, report.</p>
            </div>
            <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: '#10b981' }} />
              <div className="text-[32px] mb-3">📊</div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 font-outfit">Trasparente</h3>
              <div className="text-2xl font-extrabold text-primary-400 mb-2 font-outfit">Vedi tutto</div>
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
            Piano Free per sempre. Upgrade quando vuoi, downgrade quando vuoi.
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
