import { useState, useEffect } from 'react'
import { MOCK_PREDICTION } from '../../data/mockPrediction'
import { PredictionResult } from '../../types'
import { PredictorForm, LocationCoords } from '../../components/route-predictor/PredictorForm'
import { ResultCards } from '../../components/route-predictor/ResultCards'
import { RouteMap } from '../../components/route-predictor/RouteMap'
import { SegmentBreakdown } from '../../components/route-predictor/SegmentBreakdown'
import { LeadGate } from '../../components/route-predictor/LeadGate'

const pillars = [
  { icon: '🧠', title: 'Smart Heuristics', desc: 'Analisi di ogni segmento del percorso: precipitazioni, vento, visibilità, altitudine, tipo di strada e orario combinati.', color: '#10b981' },
  { icon: '🎯', title: 'Confidence Score', desc: 'Ogni predizione ha un punteggio 0-100% basato su orizzonte temporale, stabilità meteo e completezza dati.', color: '#10b981' },
  { icon: '📈', title: 'Calibrazione Continua', desc: 'Il sistema confronta le predizioni con i ritardi reali riportati e aggiusta i parametri settimanalmente.', color: '#10b981' },
  { icon: '🌐', title: 'Fonti dati aperte', desc: 'Open-Meteo per il meteo, OpenRouteService per i percorsi, Open-Elevation per l\'altimetria. Dati affidabili, zero licenze.', color: '#10b981' },
]

const flowSteps = [
  { num: '1', label: 'Inserisci la tua rotta', icon: '📍', desc: 'Origine, destinazione e orario. Da form o dalla chat AI.' },
  { num: '2', label: 'Analizziamo il meteo lungo il percorso', icon: '🛰️', desc: 'Ogni 50 km, controlliamo precipitazioni, vento, visibilità, altitudine e tipo di strada.' },
  { num: '3', label: 'Ricevi la predizione', icon: '⚡', desc: 'Ritardo in minuti, confidence score, rotta alternativa e consiglio operativo.' },
]

export function RouteIntelligencePage() {
  const [origin, setOrigin] = useState('Milano, Italia')
  const [destination, setDestination] = useState('Roma, Italia')
  const [originCoords, setOriginCoords] = useState<LocationCoords | null>({ lat: 45.4642, lon: 9.19 })
  const [destinationCoords, setDestinationCoords] = useState<LocationCoords | null>({ lat: 41.9028, lon: 12.4964 })
  const [date, setDate] = useState('2026-02-16')
  const [time, setTime] = useState('14:00')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isMock, setIsMock] = useState(false)

  useEffect(() => {
    document.title = 'Route Intelligence — Logintel'
  }, [])

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
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-8 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-[22px]">{step.icon}</div>
                  <span className="text-sm font-bold text-slate-500 font-outfit">STEP {step.num}</span>
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
            {pillars.map((p, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: p.color }} />
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
            {[
              { icon: '⛈️', label: 'Temporale al km 234', detail: 'Ore 16:30, severità alta', color: '#ef4444' },
              { icon: '⏱️', label: '+27 min ritardo totale', detail: 'Confidence: 82%', color: '#ef4444' },
              { icon: '🔀', label: 'Alternativa via A14', detail: '19 minuti di risparmio', color: '#06b6d4' },
            ].map((ex, i) => (
              <div key={i} className="relative bg-gradient-to-br from-dark-card to-dark rounded-[14px] border border-dark-border p-6 overflow-hidden">
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
            <div className="mt-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-3 text-red-400 text-sm font-outfit">
                {error}
              </div>
            </div>
          )}

          {isMock && result && (
            <div className="mt-6">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-5 py-3 text-yellow-400 text-sm font-outfit">
                ⚠️ Dati di esempio — API non raggiungibile
              </div>
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapApiResponse(data: any, originName: string, destName: string): PredictionResult {
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
  return data as PredictionResult
}
