export function severityColor(s: string): string {
  switch (s) {
    case 'high': return '#ef4444'
    case 'moderate': return '#f59e0b'
    case 'low': return '#06b6d4'
    default: return '#10b981'
  }
}

export function severityBg(s: string): string {
  switch (s) {
    case 'high': return 'rgba(239,68,68,0.15)'
    case 'moderate': return 'rgba(245,158,11,0.15)'
    case 'low': return 'rgba(6,182,212,0.15)'
    default: return 'rgba(16,185,129,0.15)'
  }
}

export function severityLabel(s: string): string {
  switch (s) {
    case 'high': return 'Severo'
    case 'moderate': return 'Moderato'
    case 'low': return 'Lieve'
    default: return 'OK'
  }
}

export function severityTailwind(s: string): string {
  switch (s) {
    case 'high': return 'text-red-500'
    case 'moderate': return 'text-yellow-500'
    case 'low': return 'text-cyan-400'
    default: return 'text-emerald-500'
  }
}

export function severityBorderTailwind(s: string): string {
  switch (s) {
    case 'high': return 'border-red-500/30'
    case 'moderate': return 'border-yellow-500/30'
    case 'low': return 'border-cyan-500/30'
    default: return 'border-slate-700/30'
  }
}