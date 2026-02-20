import { useState, useEffect } from 'react'
import { MOCK_PREDICTION } from '../data/mockPrediction'
import { PredictionResult } from '../types'
import { PredictorForm, LocationCoords } from '../components/route-predictor/PredictorForm'
import { ResultCards } from '../components/route-predictor/ResultCards'
import { RouteMap } from '../components/route-predictor/RouteMap'
import { SegmentBreakdown } from '../components/route-predictor/SegmentBreakdown'
import { LeadGate } from '../components/route-predictor/LeadGate'

export function RoutePredictorPage() {
  const [origin, setOrigin] = useState('Milano, Italia')
  const [destination, setDestination] = useState('Roma, Italia')
  const [originCoords, setOriginCoords] = useState<LocationCoords | null>({ lat: 45.4642, lon: 9.19 })
  const [destinationCoords, setDestinationCoords] = useState<LocationCoords | null>({ lat: 41.9028, lon: 12.4964 })
  const [date, setDate] = useState('2026-02-16')
  const [time, setTime] = useState('14:00')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    document.title = 'Route Predictor — Logintel'
  }, [])
  const [isMock, setIsMock] = useState(false)

  const handleAnalyze = async () => {
    if (!originCoords || !destinationCoords) {
      setError('Seleziona partenza e destinazione dal menu a tendina.')
      return
    }

    setLoading(true)
    setResult(null)
    setError(null)
    setIsMock(false)

    const departureTime = `${date}T${time}:00+01:00`

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/predictions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origin: { lat: originCoords.lat, lon: originCoords.lon },
          destination: { lat: destinationCoords.lat, lon: destinationCoords.lon },
          departure_time: departureTime,
          include_alternatives: true,
        }),
      })

      if (!res.ok) throw new Error(`API error: ${res.status}`)

      const data = await res.json()
      const mapped = mapApiResponse(data, origin, destination)
      setResult(mapped)
    } catch {
      setResult(MOCK_PREDICTION)
      setIsMock(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-dark min-h-screen pt-[72px]">
      {/* Header */}
      <section className="pt-12 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-4 py-1.5 mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-500 text-xs font-semibold font-outfit">Tool Live — Collegato all'API Logintel</span>
        </div>
        <h1 className="text-[clamp(28px,4vw,42px)] font-extrabold text-slate-100 mb-3 font-outfit tracking-tight">Route Predictor</h1>
        <p className="text-slate-400 text-base max-w-[500px] mx-auto font-outfit">
          Inserisci partenza e destinazione per ricevere la predizione di ritardo meteo-correlato.
        </p>
      </section>

      {/* Form */}
      <section className="px-6 py-8">
        <PredictorForm
          origin={origin} setOrigin={setOrigin}
          destination={destination} setDestination={setDestination}
          originCoords={originCoords} setOriginCoords={setOriginCoords}
          destinationCoords={destinationCoords} setDestinationCoords={setDestinationCoords}
          date={date} setDate={setDate}
          time={time} setTime={setTime}
          loading={loading} onSubmit={handleAnalyze}
        />
      </section>

      {/* Error */}
      {error && (
        <div className="px-6 max-w-[800px] mx-auto">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-3 text-red-400 text-sm font-outfit mb-4">
            {error}
          </div>
        </div>
      )}

      {/* Mock data banner */}
      {isMock && result && (
        <div className="px-6 max-w-[1000px] mx-auto">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-5 py-3 text-yellow-400 text-sm font-outfit mb-4">
            ⚠️ Dati di esempio — API non raggiungibile
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <section className="px-6 pb-20">
          <div className="max-w-[1000px] mx-auto">
            <ResultCards result={result} />
            <RouteMap result={result} />
            <SegmentBreakdown segments={result.prediction.segments} />
            <LeadGate />
          </div>
        </section>
      )}
    </div>
  )
}

// Maps API response to the local PredictionResult type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapApiResponse(data: any, originName: string, destName: string): PredictionResult {
  // If the API already matches our type, return directly
  if (data.prediction && data.route) {
    return {
      id: data.id || data.prediction_id || `pred_${Date.now()}`,
      route: {
        origin: { name: originName.split(',')[0], lat: data.route.origin?.lat ?? 0, lon: data.route.origin?.lon ?? 0 },
        destination: { name: destName.split(',')[0], lat: data.route.destination?.lat ?? 0, lon: data.route.destination?.lon ?? 0 },
        distance_km: data.route.distance_km ?? 0,
        base_duration_minutes: data.route.base_duration_minutes ?? 0,
      },
      prediction: {
        total_delay_minutes: data.prediction.total_delay_minutes ?? 0,
        confidence_score: data.prediction.confidence_score ?? 0,
        severity: data.prediction.severity ?? 'none',
        adjusted_duration_minutes: data.prediction.adjusted_duration_minutes ?? 0,
        segments: (data.prediction.segments ?? []).map((s: Record<string, unknown>) => ({
          km: s.km ?? 0,
          name: s.name ?? '',
          lat: s.lat ?? 0,
          lon: s.lon ?? 0,
          weather: s.weather ?? '',
          delay: s.delay ?? 0,
          severity: s.severity ?? 'none',
          temp: s.temp ?? 0,
          wind: s.wind ?? 0,
        })),
      },
      alternative: data.alternative ?? {
        name: 'N/A',
        distance_km: 0,
        base_duration_minutes: 0,
        total_delay_minutes: 0,
        adjusted_duration_minutes: 0,
        savings_minutes: 0,
      },
    }
  }
  // Fallback: return data as-is hoping it conforms
  return data as PredictionResult
}
