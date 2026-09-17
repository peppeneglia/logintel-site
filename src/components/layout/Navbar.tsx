import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { APP_URL, APP_DEMO_URL } from '../../config'

const links = [
  { to: '/', label: 'Home' },
  { to: '/web-app', label: 'Web App' },
  { to: '/moduli', label: 'Moduli' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/chi-siamo', label: 'Chi Siamo' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="select-none fixed top-0 left-0 right-0 z-50 bg-dark/92 backdrop-blur-xl border-b border-dark-border/50">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
               viewBox="0 0 24 24" fill="none" aria-hidden="true"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="nav-logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <g stroke="url(#nav-logo-gradient)">
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
              <path d="M15 18h2"/>
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
              <circle cx="17" cy="18" r="2"/>
              <circle cx="7" cy="18" r="2"/>
            </g>
          </svg>
          <span className="text-[22px] font-bold bg-gradient-to-r from-primary-400 to-cyan-500 bg-clip-text text-transparent font-outfit">
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
          <a
            href={APP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2.5 rounded-lg bg-white/5 border border-white/12 text-slate-100 font-semibold text-sm no-underline hover:bg-white/10 transition-all"
          >
            Guarda la demo
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1.5 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-sm no-underline hover:shadow-lg hover:shadow-primary-500/25 transition-all"
          >
            Accedi alla web app
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
          className="lg:hidden text-slate-400 bg-transparent border-none cursor-pointer"
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" /></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
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
          <div className="flex flex-col gap-2.5 mt-4">
            <a
              href={APP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-3 rounded-lg bg-white/5 border border-white/12 text-slate-100 font-semibold text-sm no-underline"
            >
              Guarda la demo
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-sm no-underline"
            >
              Accedi alla web app
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
