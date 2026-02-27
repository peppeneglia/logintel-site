import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Starter',
    price: '€0',
    period: '/mese',
    desc: 'Per provare la piattaforma senza impegno.',
    features: [
      '1 utente',
      '50 crediti/mese',
      'Chat AI illimitata',
      'Route Intelligence',
      'Primo mese gratis su tutti i piani',
    ],
    cta: 'Inizia gratis',
    ctaLink: '/contatti',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '€79',
    period: '/utente/mese',
    desc: 'Per fleet manager che vogliono il massimo.',
    features: [
      'Utenti illimitati',
      '1.000 crediti/mese per utente',
      'Tutti i moduli attivi',
      'Storico completo',
      'Supporto prioritario',
    ],
    cta: 'Primo mese gratis',
    ctaLink: '/contatti',
    highlight: true,
    badge: 'Più popolare',
  },
  {
    name: 'Team',
    price: '€49',
    period: '/utente/mese (min 3)',
    desc: 'Per team di dispatcher e fleet manager.',
    features: [
      'Minimo 3 utenti',
      '2.000+ crediti/utente/mese',
      'Accesso API per modulo',
      'Alert email',
      'Dashboard condivisa',
    ],
    cta: 'Contattaci',
    ctaLink: '/contatti',
    highlight: false,
  },
]

const faqs = [
  {
    q: 'Cos\'è un credito?',
    a: 'I crediti sono l\'unità di consumo della piattaforma. Ogni attività (predizione, confronto percorsi, report, pianificazione) consuma un numero di crediti in base alla sua complessità. La chat AI generica è sempre gratuita.',
  },
  {
    q: 'Cosa succede se finisco i crediti?',
    a: 'Puoi acquistare crediti extra oppure fare upgrade al piano superiore. Non perdi mai l\'accesso alla chat AI.',
  },
  {
    q: 'Posso fare downgrade?',
    a: 'Sì, in qualsiasi momento. Il downgrade diventa effettivo dal mese successivo. I crediti non utilizzati non sono rimborsabili.',
  },
  {
    q: 'Serve una carta di credito per iniziare?',
    a: 'No. Il primo mese è completamente gratuito su tutti i piani. Nessuna carta richiesta. Provi e decidi.',
  },
]

export function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    document.title = 'Pricing — Logintel'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.1) 0%, transparent 60%), #0f172a' }}>
        <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Pricing</span>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-slate-100 mt-3 mb-5 font-outfit tracking-tight">
          Pricing trasparente. Niente "Contact Us".
        </h1>
        <p className="text-slate-400 text-lg max-w-[640px] mx-auto leading-relaxed font-outfit">
          Sappiamo che i competitor nascondono i prezzi. Noi no.
        </p>
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/25 rounded-full px-5 py-2 mt-6">
          <span className="text-primary-400 text-[13px] font-semibold font-outfit">Primo mese gratuito su tutti i piani — nessuna carta richiesta</span>
        </div>
      </section>

      {/* 3 Tier Cards */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((tier, i) => (
              <div key={i} className={`relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border overflow-hidden p-7 flex flex-col ${
                tier.highlight ? 'border-primary-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)]' : 'border-dark-border'
              }`}>
                <div className={`absolute top-0 left-0 right-0 h-[3px] ${tier.highlight ? 'bg-gradient-to-r from-primary-400 to-cyan-500' : 'bg-dark-border/50'}`} />
                {tier.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-primary-500/15 text-primary-400 border border-primary-500/25 px-3 py-1 rounded-full">{tier.badge}</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-100 mb-2 font-outfit">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-slate-100 font-outfit">{tier.price}</span>
                  <span className="text-base text-slate-400 font-outfit">{tier.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 font-outfit">{tier.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300 font-outfit">
                      <span className="text-primary-400 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={tier.ctaLink}
                  className={`no-underline block text-center px-6 py-3.5 rounded-xl font-bold text-[15px] font-outfit transition-all ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-[0_4px_24px_rgba(16,185,129,0.3)]'
                      : 'bg-white/5 border border-white/12 text-slate-100 hover:bg-white/10'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Crediti extra */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-dark-card border border-dark-border rounded-full px-6 py-3">
              <span className="text-slate-400 text-sm font-outfit">Crediti extra:</span>
              <span className="text-slate-100 text-sm font-bold font-outfit">€0,25 per credito aggiuntivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-10 text-center font-outfit">Domande frequenti</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left bg-transparent border-none cursor-pointer"
                >
                  <span className="text-base font-bold text-slate-100 font-outfit">{faq.q}</span>
                  <span className="text-slate-400 text-xl shrink-0 ml-4">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-400 text-sm leading-relaxed font-outfit">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.15) 0%, transparent 70%), #0f172a' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mb-5 font-outfit tracking-tight">
            Hai dubbi? Parliamone.
          </h2>
          <p className="text-slate-400 text-[17px] mb-9 leading-relaxed font-outfit">
            Siamo disponibili per rispondere a qualsiasi domanda.
          </p>
          <Link to="/contatti" className="no-underline inline-block px-9 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit shadow-[0_4px_24px_rgba(16,185,129,0.3)] transition-all">
            Contattaci
          </Link>
        </div>
      </section>
    </div>
  )
}
