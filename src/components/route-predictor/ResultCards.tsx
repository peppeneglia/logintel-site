import type { PredictionResult, Segment } from '../../types'
import { severityColor, severityLabel } from '../../utils/severity'

interface ResultCardsProps {
  result: PredictionResult
}

function confidenceLabel(score: number): string {
  if (score >= 0.8) return 'Affidabilità alta'
  if (score >= 0.6) return 'Affidabilità buona'
  return 'Affidabilità bassa'
}

function worstSegment(segments: Segment[]): Segment | null {
  return segments.reduce<Segment | null>(
    (worst, seg) => (worst === null || seg.delay > worst.delay ? seg : worst),
    null,
  )
}

export function ResultCards({ result }: ResultCardsProps) {
  const p = result.prediction
  const alt = result.alternative

  const worst = worstSegment(p.segments)
  const severityDetail =
    worst && worst.delay > 0 ? `${worst.weather} a ${worst.name}` : 'Nessuna criticità rilevata'

  const cards = [
    {
      label: 'RITARDO PREVISTO',
      value: `+${p.total_delay_minutes} min`,
      detail: `su ${result.route.distance_km} km`,
      color: severityColor(p.severity),
      highlight: false,
    },
    {
      label: 'CONFIDENCE',
      value: `${Math.round(p.confidence_score * 100)}%`,
      detail: confidenceLabel(p.confidence_score),
      color: '#10b981',
      highlight: false,
    },
    {
      label: 'SEVERITÀ',
      value: severityLabel(p.severity),
      detail: severityDetail,
      color: severityColor(p.severity),
      highlight: false,
    },
    {
      label: 'ALTERNATIVA',
      value: alt.savings_minutes > 0 ? `-${alt.savings_minutes} min` : 'Nessuna',
      detail: alt.name,
      color: '#10b981',
      highlight: true,
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card) => (
        <div
          key={card.label}
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
