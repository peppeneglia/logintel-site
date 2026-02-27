import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/prodotto', label: 'Prodotto' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/chi-siamo', label: 'Chi Siamo' },
  { to: '/contatti', label: 'Contatti' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/92 backdrop-blur-xl border-b border-dark-border/50">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-lg">
            🚛
          </div>
          <span className="text-[22px] font-extrabold text-primary-500 tracking-tight font-outfit">
            Logintel
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1.5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg font-semibold text-sm no-underline transition-all ${
                location.pathname === l.to
                  ? 'bg-primary-500/15 text-primary-400'
                  : 'text-slate-400 hover:bg-white/5 hover:text-primary-400'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/prodotto"
            className="ml-3 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-sm no-underline hover:shadow-lg hover:shadow-primary-500/25 transition-all"
          >
            Prova Gratis →
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-slate-400 bg-transparent border-none cursor-pointer"
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-dark/98 px-6 pb-4 border-t border-dark-border/50">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3.5 text-base font-semibold no-underline border-b border-dark-border/30 ${
                location.pathname === l.to ? 'text-primary-400' : 'text-slate-400'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
