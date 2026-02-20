import { PredictionResult } from '../../types'
import { severityColor, severityLabel } from '../../utils/severity'

interface ResultCardsProps {
  result: PredictionResult
}

export function ResultCards({ result }: ResultCardsProps) {
  const p = result.prediction
  const alt = result.alternative

  const cards = [
    {
      label: 'RITARDO PREVISTO',
      value: `+${p.total_delay_minutes} min`,
      detail: `su ${result.route.distance_km} km`,
      color: severityColor(p.severity),
    },
    {
      label: 'CONFIDENCE',
      value: `${Math.round(p.confidence_score * 100)}%`,
      detail: 'Affidabilità buona',
      color: '#3b82f6',
    },
    {
      label: 'SEVERITÀ',
      value: severityLabel(p.severity),
      detail: 'Temporale rilevato',
      color: severityColor(p.severity),
    },
    {
      label: 'ALTERNATIVA',
      value: `-${alt.savings_minutes} min`,
      detail: alt.name,
      color: '#10b981',
      highlight: true,
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`relative rounded-2xl border p-6 overflow-hidden bg-gradient-to-br ${
            card.highlight
              ? 'from-emerald-500/10 to-dark border-emerald-500/30'
              : 'from-dark-card to-dark border-dark-border'
          }`}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: card.color }}
          />
          <div className="text-[13px] text-slate-400 font-semibold mb-2 font-outfit">
            {card.label}
          </div>
          <div
            className="text-3xl lg:text-4xl font-extrabold font-outfit"
            style={{ color: card.color }}
          >
            {card.value}
          </div>
          <div className="text-[13px] text-slate-400 mt-1 font-outfit">{card.detail}</div>
        </div>
      ))}
    </div>
  )
}