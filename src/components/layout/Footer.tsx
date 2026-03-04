import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                   viewBox="0 0 24 24" fill="none"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <g stroke="url(#footer-logo-gradient)">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
                  <path d="M15 18h2"/>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
                  <circle cx="17" cy="18" r="2"/>
                  <circle cx="7" cy="18" r="2"/>
                </g>
              </svg>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-400 to-cyan-500 bg-clip-text text-transparent font-outfit">Logintel</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              L'assistente intelligente del fleet manager europeo. 6 moduli verticali per gestire ogni aspetto della tua flotta.
            </p>
          </div>

          {/* Prodotto */}
          <div>
            <h4 className="text-slate-100 text-sm font-bold mb-4 font-outfit">PRODOTTO</h4>
            <div className="space-y-2.5">
              <Link to="/web-app" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Web App</Link>
              <Link to="/moduli" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Assistente AI</Link>
              <Link to="/pricing" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Pricing</Link>
            </div>
          </div>

          {/* Moduli */}
          <div>
            <h4 className="text-slate-100 text-sm font-bold mb-4 font-outfit">MODULI</h4>
            <div className="space-y-2.5">
              <Link to="/route-intelligence" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Route Intelligence</Link>
              <Link to="/fleet-intelligence" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Fleet Intelligence</Link>
              <Link to="/delivery-intelligence" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Delivery Intelligence</Link>
              <Link to="/compliance-intelligence" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Compliance Intelligence</Link>
              <Link to="/finance-intelligence" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Finance Intelligence</Link>
              <Link to="/carbon-intelligence" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Carbon Intelligence</Link>
            </div>
          </div>

          {/* Azienda */}
          <div>
            <h4 className="text-slate-100 text-sm font-bold mb-4 font-outfit">AZIENDA</h4>
            <div className="space-y-2.5">
              <Link to="/chi-siamo" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Chi Siamo</Link>
              <Link to="/contatti" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Contatti</Link>
              <p className="text-slate-400 text-sm">info@logintel.it</p>
              <p className="text-slate-400 text-sm">Bari, Italia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border pt-6 flex flex-wrap justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">© 2026 Logintel. Tutti i diritti riservati.</p>
          <p className="text-slate-500 text-xs">Made with 🚛 in Puglia</p>
        </div>
      </div>
    </footer>
  )
}
