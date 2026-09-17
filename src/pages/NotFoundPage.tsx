import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('Pagina non trovata — Logintel')

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-[72px] text-center"
      style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(16,185,129,0.1) 0%, transparent 60%), #0f172a' }}
    >
      <div className="max-w-[520px]">
        <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Errore 404</span>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-slate-100 mt-3 mb-5 font-outfit tracking-tight">
          Pagina non trovata
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed font-outfit mb-9">
          La rotta che cercavi non esiste. Torna alla home per ripartire.
        </p>
        <Link
          to="/"
          className="no-underline inline-block px-9 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-bold text-base font-outfit shadow-[0_4px_24px_rgba(16,185,129,0.3)] transition-all"
        >
          Torna alla home
        </Link>
      </div>
    </section>
  )
}
