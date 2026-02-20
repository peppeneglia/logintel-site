import { ReactNode } from 'react'

interface DarkCardProps {
  children: ReactNode
  gradientFrom?: string
  gradientTo?: string
  className?: string
  onClick?: () => void
}

export function DarkCard({
  children,
  gradientFrom = '#3b82f6',
  gradientTo = '#8b5cf6',
  className = '',
  onClick,
}: DarkCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border overflow-hidden transition-all duration-200 ${
        onClick ? 'cursor-pointer hover:shadow-xl hover:-translate-y-0.5' : ''
      } ${className}`}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})` }}
      />
      {children}
    </div>
  )
}