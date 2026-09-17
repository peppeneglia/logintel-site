import type { Segment } from '../../types'
import { severityColor, severityBg, severityBorderTailwind } from '../../utils/severity'

interface SegmentBreakdownProps {
  segments: Segment[]
}

export function SegmentBreakdown({ segments }: SegmentBreakdownProps) {
  return (
    <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden mb-6">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-500 to-red-500" />
      <h3 className="text-lg font-bold text-slate-100 mb-5 font-outfit">
        📊 Breakdown per Segmento
      </h3>

      <div className="space-y-2.5">
        {segments.map((seg) => (
          <div
            key={`${seg.km}-${seg.name}`}
            className={`rounded-[10px] border ${severityBorderTailwind(seg.severity)} px-4 py-3`}
            style={{
              background: seg.delay > 0 ? severityBg(seg.severity) : 'rgba(255,255,255,0.02)',
            }}
          >
            {/* Desktop: grid layout */}
            <div className="hidden sm:grid grid-cols-[70px_1fr_120px_100px_70px] items-center gap-3">
              <span className="text-[13px] text-slate-400 font-semibold font-outfit">
                km {seg.km}
              </span>
              <span className="text-sm text-slate-100 font-semibold font-outfit">{seg.name}</span>
              <span className="text-[13px] text-slate-400 font-outfit">{seg.weather}</span>
              <span className="text-[13px] text-slate-400 font-outfit">
                {seg.temp}°C · {seg.wind}km/h
              </span>
              <span
                className="text-sm font-bold text-right font-outfit"
                style={{ color: seg.delay > 0 ? severityColor(seg.severity) : '#10b981' }}
              >
                {seg.delay > 0 ? `+${seg.delay} min` : 'OK'}
              </span>
            </div>

            {/* Mobile: stacked layout */}
            <div className="sm:hidden flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-100 font-semibold font-outfit">{seg.name}</span>
                <span
                  className="text-sm font-bold font-outfit"
                  style={{ color: seg.delay > 0 ? severityColor(seg.severity) : '#10b981' }}
                >
                  {seg.delay > 0 ? `+${seg.delay} min` : 'OK'}
                </span>
              </div>
              <div className="flex gap-3 text-[12px] text-slate-400 font-outfit">
                <span>km {seg.km}</span>
                <span>{seg.weather}</span>
                <span>{seg.temp}°C · {seg.wind}km/h</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
