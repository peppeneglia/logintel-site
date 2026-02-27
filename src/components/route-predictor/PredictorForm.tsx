import { useState, useEffect, useRef } from 'react'

export interface LocationCoords {
  lat: number
  lon: number
}

interface NominatimResult {
  display_name: string
  lat: string
  lon: string
}

interface PredictorFormProps {
  origin: string
  setOrigin: (v: string) => void
  destination: string
  setDestination: (v: string) => void
  originCoords: LocationCoords | null
  setOriginCoords: (v: LocationCoords | null) => void
  destinationCoords: LocationCoords | null
  setDestinationCoords: (v: LocationCoords | null) => void
  date: string
  setDate: (v: string) => void
  time: string
  setTime: (v: string) => void
  loading: boolean
  onSubmit: () => void
}

function useDebounce(value: string, delay: number) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(t)
  }, [value, delay])
  return debounced
}

function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  placeholder,
  inputClass,
}: {
  value: string
  onChange: (v: string) => void
  onSelect: (name: string, coords: LocationCoords) => void
  placeholder: string
  inputClass: string
}) {
  const [results, setResults] = useState<NominatimResult[]>([])
  const [open, setOpen] = useState(false)
  const debounced = useDebounce(value, 400)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (debounced.length < 3) {
      setResults([])
      return
    }

    const controller = new AbortController()
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(debounced)}&limit=5&countrycodes=it,de,fr,es,nl,at,ch,be`,
      {
        signal: controller.signal,
        headers: { 'User-Agent': 'LogintelSite/1.0' },
      }
    )
      .then(r => r.json())
      .then((data: NominatimResult[]) => {
        setResults(data)
        setOpen(data.length > 0)
      })
      .catch(() => {})

    return () => controller.abort()
  }, [debounced])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const truncate = (s: string, max = 60) => s.length > max ? s.slice(0, max) + '...' : s

  return (
    <div ref={wrapperRef} className="relative">
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
          setOpen(true)
        }}
        onFocus={() => results.length > 0 && setOpen(true)}
        placeholder={placeholder}
        className={inputClass}
      />
      {open && results.length > 0 && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 rounded-lg border border-dark-border bg-dark-card shadow-xl overflow-hidden">
          {results.map((r, i) => (
            <button
              key={i}
              type="button"
              className="w-full text-left px-4 py-2.5 text-sm text-slate-100 font-outfit hover:bg-white/10 transition-colors border-none bg-transparent cursor-pointer"
              onClick={() => {
                onSelect(r.display_name, { lat: parseFloat(r.lat), lon: parseFloat(r.lon) })
                setOpen(false)
                setResults([])
              }}
            >
              {truncate(r.display_name)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function PredictorForm({
  origin, setOrigin, destination, setDestination,
  originCoords, setOriginCoords, destinationCoords, setDestinationCoords,
  date, setDate, time, setTime, loading, onSubmit,
}: PredictorFormProps) {
  const inputClass =
    'w-full px-4 py-3 rounded-[10px] border border-dark-border bg-white/5 text-slate-100 text-sm outline-none font-outfit placeholder:text-slate-500/60 focus:border-primary-500/50 transition-colors'

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[13px] font-semibold text-slate-400 mb-1.5 font-outfit">Partenza</label>
            <AddressAutocomplete
              value={origin}
              onChange={(v) => { setOrigin(v); setOriginCoords(null) }}
              onSelect={(name, coords) => { setOrigin(name.split(',').slice(0, 2).join(',')); setOriginCoords(coords) }}
              placeholder="es. Milano, Italia"
              inputClass={inputClass}
            />
            {originCoords && (
              <span className="text-[11px] text-emerald-500/70 mt-1 block font-outfit">
                📍 {originCoords.lat.toFixed(4)}, {originCoords.lon.toFixed(4)}
              </span>
            )}
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-slate-400 mb-1.5 font-outfit">Destinazione</label>
            <AddressAutocomplete
              value={destination}
              onChange={(v) => { setDestination(v); setDestinationCoords(null) }}
              onSelect={(name, coords) => { setDestination(name.split(',').slice(0, 2).join(',')); setDestinationCoords(coords) }}
              placeholder="es. Roma, Italia"
              inputClass={inputClass}
            />
            {destinationCoords && (
              <span className="text-[11px] text-emerald-500/70 mt-1 block font-outfit">
                📍 {destinationCoords.lat.toFixed(4)}, {destinationCoords.lon.toFixed(4)}
              </span>
            )}
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-slate-400 mb-1.5 font-outfit">Data partenza</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-slate-400 mb-1.5 font-outfit">Ora partenza</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className={inputClass} />
          </div>
        </div>

        <button
          onClick={onSubmit}
          disabled={loading}
          className={`w-full mt-5 py-4 rounded-xl border-none font-bold text-base text-white font-outfit transition-all ${
            loading
              ? 'bg-dark-border cursor-not-allowed'
              : 'bg-gradient-to-r from-primary-500 to-primary-700 cursor-pointer hover:shadow-lg hover:shadow-primary-500/25'
          }`}
        >
          {loading ? '⏳ Analisi in corso...' : '🚛 Analizza Percorso'}
        </button>
      </div>
    </div>
  )
}
