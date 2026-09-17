import { useState } from 'react'
import { MOCK_PREDICTION } from '../../data/mockPrediction'
import type { Alternative, PredictionResult, RoutePoint, Segment, Severity } from '../../types'
import { PredictorForm, type LocationCoords } from '../../components/route-predictor/PredictorForm'
import { ResultCards } from '../../components/route-predictor/ResultCards'
import { RouteMap } from '../../components/route-predictor/RouteMap'
import { SegmentBreakdown } from '../../components/route-predictor/SegmentBreakdown'
import { LeadGate } from '../../components/route-predictor/LeadGate'
import { usePageTitle } from '../../hooks/usePageTitle'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, '')

const pillars = [
  { icon: '🧠', title: 'Smart Heuristics', desc: 'Analisi di ogni segmento del percorso: precipitazioni, vento, visibilità, altitudine, tipo di strada e orario combinati.' },
  { icon: '🎯', title: 'Confidence Score', desc: 'Ogni predizione ha un punteggio 0-100% basato su orizzonte temporale, stabilità meteo e completezza dati.' },
  { icon: '📈', title: 'Calibrazione Continua', desc: 'Il sistema confronta le predizioni con i ritardi reali riportati e aggiusta i parametri settimanalmente.' },
  { icon: '🌐', title: 'Fonti dati aperte', desc: 'Open-Meteo per il meteo, OpenRouteService per i percorsi, Open-Elevation per l\'altimetria. Dati affidabili, zero licenze.' },
]

const flowSteps = [
  { label: 'Inserisci la tua rotta', icon: '📍', desc: 'Origine, destinazione e orario. Da form o dalla chat AI.' },
  { label: 'Analizziamo il meteo lungo il percorso', icon: '🛰️', desc: 'Ogni 50 km, controlliamo precipitazioni, vento, visibilità, altitudine e tipo di strada.' },
  { label: 'Ricevi la predizione', icon: '⚡', desc: 'Ritardo in minuti, confidence score, rotta alternativa e consiglio operativo.' },
]

const exampleCards = [
  { icon: '⛈️', label: 'Temporale al km 234', detail: 'Ore 16:30, severità alta', color: '#ef4444' },
  { icon: '⏱️', label: '+27 min ritardo totale', detail: 'Confidence: 82%', color: '#ef4444' },
  { icon: '🔀', label: 'Alternativa via A14', detail: '19 minuti di risparmio', color: '#06b6d4' },
]

const DEFAULT_ORIGIN = { name: 'Milano, Italia', coords: { lat: 45.4642, lon: 9.19 } }
const DEFAULT_DESTINATION = { name: 'Roma, Italia', coords: { lat: 41.9028, lon: 12.4964 } }

/** Returns tomorrow's date as YYYY-MM-DD in the user's local timezone. */
function tomorrowIsoDate(): string {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export function RouteIntelligencePage() {
  usePageTitle('Route Intelligence — Logintel')

  const [origin, setOrigin] = useState(DEFAULT_ORIGIN.name)
  const [destination, setDestination] = useState(DEFAULT_DESTINATION.name)
  const [originCoords, setOriginCoords] = useState<LocationCoords | null>(DEFAULT_ORIGIN.coords)
  const [destinationCoords, setDestinationCoords] = useState<LocationCoords | null>(DEFAULT_DESTINATION.coords)
  const [date, setDate] = useState(tomorrowIsoDate)
  const [time, setTime] = useState('14:00')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [error, setError] = useState<string | null>(null)
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

    // Without a configured API the predictor runs on sample data.
    if (!API_BASE_URL) {
      setResult(MOCK_PREDICTION)
      setIsMock(true)
      setLoading(false)
      return
    }

    // Local date + time interpreted in the user's timezone, sent as UTC ISO-8601.
    const departureTime = new Date(`${date}T${time}:00`).toISOString()

    try {
      const res = await fetch(`${API_BASE_URL}/v1/predictions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origin: originCoords,
          destination: destinationCoords,
          departure_time: departureTime,
          include_alternatives: true,
        }),
      })

      if (!res.ok) throw new Error(`API error: ${res.status}`)

      const data: unknown = await res.json()
      setResult(mapApiResponse(data, origin, destination))
    } catch {
      setResult(MOCK_PREDICTION)
      setIsMock(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.1) 0%, transparent 60%), #0f172a' }}>
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/25 rounded-full px-4 py-1.5 mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-primary-400 text-xs font-semibold font-outfit">Modulo attivo</span>
        </div>
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-slate-100 mt-3 mb-5 font-outfit tracking-tight">
          <span className="bg-gradient-to-r from-primary-400 to-cyan-500 bg-clip-text text-transparent">Route Intelligence</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-[640px] mx-auto leading-relaxed font-outfit">
          Combiniamo dati meteo, caratteristiche del percorso e feedback reale per dirti quanto ritardo aspettarti — prima di partire.
        </p>
      </section>

      {/* Flow — 3 step */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-12 text-center font-outfit">Il flusso di una predizione</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-8 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-[22px]">{step.icon}</div>
                  <span className="text-sm font-bold text-slate-500 font-outfit">STEP {i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2.5 font-outfit">{step.label}</h3>
                <p className="text-slate-400 text-[15px] leading-relaxed font-outfit">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-12 text-center font-outfit">I 4 pilastri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary-500" />
                <div className="text-[32px] mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold text-slate-100 mb-2.5 font-outfit">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-outfit">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="bg-[#0c1322] py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[28px] font-extrabold text-slate-100 mb-4 text-center font-outfit">Esempio concreto</h2>
          <p className="text-slate-400 text-center mb-10 text-base font-outfit">Milano → Roma, partenza domani alle 14:00</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {exampleCards.map((ex) => (
              <div key={ex.label} className="relative bg-gradient-to-br from-dark-card to-dark rounded-[14px] border border-dark-border p-6 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: ex.color }} />
                <div className="text-[28px] mb-3">{ex.icon}</div>
                <div className="text-base font-bold text-slate-100 mb-1.5 font-outfit">{ex.label}</div>
                <div className="text-sm text-slate-400 font-outfit">{ex.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Predictor Tool */}
      <section className="bg-dark py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary-400 text-[13px] font-bold uppercase tracking-[2px] font-outfit">Prova ora</span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold text-slate-100 mt-3 font-outfit tracking-tight">Route Predictor</h2>
            <p className="text-slate-400 text-base mt-3 max-w-[500px] mx-auto font-outfit">
              Inserisci partenza e destinazione per ricevere la predizione di ritardo meteo-correlato.
            </p>
          </div>

          <PredictorForm
            origin={origin} setOrigin={setOrigin}
            destination={destination} setDestination={setDestination}
            originCoords={originCoords} setOriginCoords={setOriginCoords}
            destinationCoords={destinationCoords} setDestinationCoords={setDestinationCoords}
            date={date} setDate={setDate}
            time={time} setTime={setTime}
            loading={loading} onSubmit={handleAnalyze}
          />

          {error && (
            <div role="alert" className="mt-6 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-3 text-red-400 text-sm font-outfit">
              {error}
            </div>
          )}

          {isMock && result && (
            <div role="status" className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-5 py-3 text-yellow-400 text-sm font-outfit">
              ⚠️ Dati di esempio — API non configurata o non raggiungibile
            </div>
          )}

          {result && (
            <div className="mt-8">
              <ResultCards result={result} />
              <RouteMap result={result} />
              <SegmentBreakdown segments={result.prediction.segments} />
              <LeadGate />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

/* ── API response mapping ─────────────────────────────────────────────── */

interface ApiPredictionResponse {
  id?: string
  prediction_id?: string
  route: {
    origin?: Partial<RoutePoint>
    destination?: Partial<RoutePoint>
    distance_km?: number
    base_duration_minutes?: number
  }
  prediction: {
    total_delay_minutes?: number
    confidence_score?: number
    severity?: Severity
    adjusted_duration_minutes?: number
    segments?: Partial<Segment>[]
  }
  alternative?: Alternative | null
}

const EMPTY_ALTERNATIVE: Alternative = {
  name: 'N/A',
  distance_km: 0,
  base_duration_minutes: 0,
  total_delay_minutes: 0,
  adjusted_duration_minutes: 0,
  savings_minutes: 0,
}

function isApiPredictionResponse(data: unknown): data is ApiPredictionResponse {
  if (typeof data !== 'object' || data === null) return false
  const d = data as Record<string, unknown>
  return typeof d.route === 'object' && d.route !== null && typeof d.prediction === 'object' && d.prediction !== null
}

/** Normalises the prediction API payload into the shape the UI components expect. */
function mapApiResponse(data: unknown, originName: string, destName: string): PredictionResult {
  if (!isApiPredictionResponse(data)) {
    throw new Error('Unexpected API response shape')
  }

  const { route, prediction } = data

  return {
    id: data.id ?? data.prediction_id ?? `pred_${Date.now()}`,
    route: {
      origin: { name: originName.split(',')[0], lat: route.origin?.lat ?? 0, lon: route.origin?.lon ?? 0 },
      destination: { name: destName.split(',')[0], lat: route.destination?.lat ?? 0, lon: route.destination?.lon ?? 0 },
      distance_km: route.distance_km ?? 0,
      base_duration_minutes: route.base_duration_minutes ?? 0,
    },
    prediction: {
      total_delay_minutes: prediction.total_delay_minutes ?? 0,
      confidence_score: prediction.confidence_score ?? 0,
      severity: prediction.severity ?? 'none',
      adjusted_duration_minutes: prediction.adjusted_duration_minutes ?? 0,
      segments: (prediction.segments ?? []).map((s) => ({
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
    alternative: data.alternative ?? EMPTY_ALTERNATIVE,
  }
}
