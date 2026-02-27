import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-base">
                🚛
              </div>
              <span className="text-lg font-extrabold text-primary-500 font-outfit">Logintel</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              L'assistente intelligente del fleet manager europeo. 6 moduli verticali per gestire ogni aspetto della tua flotta.
            </p>
          </div>

          {/* Prodotto */}
          <div>
            <h4 className="text-slate-100 text-sm font-bold mb-4 font-outfit">PRODOTTO</h4>
            <div className="space-y-2.5">
              <Link to="/prodotto" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Logintel App</Link>
              <Link to="/pricing" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Pricing</Link>
            </div>
          </div>

          {/* Azienda */}
          <div>
            <h4 className="text-slate-100 text-sm font-bold mb-4 font-outfit">AZIENDA</h4>
            <div className="space-y-2.5">
              <Link to="/chi-siamo" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Chi Siamo</Link>
              <Link to="/contatti" className="block text-slate-400 text-sm no-underline hover:text-primary-400 transition-colors">Contatti</Link>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-slate-100 text-sm font-bold mb-4 font-outfit">CONTATTI</h4>
            <div className="space-y-2.5">
              <p className="text-slate-400 text-sm">info@logintel.it</p>
              <p className="text-slate-400 text-sm">Bari, Italia</p>
              <p className="text-slate-400 text-sm">NextOrbit by Deloitte</p>
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
