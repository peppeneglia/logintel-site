import { useState, useEffect, useRef, type FormEvent } from 'react'

export interface LocationCoords {
  lat: number
  lon: number
}

interface NominatimResult {
  place_id: number
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

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search'
const NOMINATIM_COUNTRIES = 'it,de,fr,es,nl,at,ch,be'
const MIN_QUERY_LENGTH = 3
const DEBOUNCE_MS = 400

const inputClass =
  'w-full px-4 py-3 rounded-[10px] border border-dark-border bg-white/5 text-slate-100 text-sm outline-none font-outfit placeholder:text-slate-500/60 focus:border-primary-500/50 transition-colors'
const labelClass = 'block text-[13px] font-semibold text-slate-400 mb-1.5 font-outfit'

function useDebounce(value: string, delay: number) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(t)
  }, [value, delay])
  return debounced
}

function truncate(s: string, max = 60) {
  return s.length > max ? `${s.slice(0, max)}...` : s
}

/** Keeps only "place, region" from a full Nominatim display name. */
function shortPlaceName(displayName: string) {
  return displayName.split(',').slice(0, 2).join(',')
}

interface AddressAutocompleteProps {
  id: string
  value: string
  onChange: (v: string) => void
  onSelect: (name: string, coords: LocationCoords) => void
  placeholder: string
}

function AddressAutocomplete({ id, value, onChange, onSelect, placeholder }: AddressAutocompleteProps) {
  const [results, setResults] = useState<NominatimResult[]>([])
  const [open, setOpen] = useState(false)
  const debounced = useDebounce(value, DEBOUNCE_MS)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (debounced.length < MIN_QUERY_LENGTH) {
      setResults([])
      return
    }

    const controller = new AbortController()
    const params = new URLSearchParams({
      format: 'json',
      q: debounced,
      limit: '5',
      countrycodes: NOMINATIM_COUNTRIES,
    })

    fetch(`${NOMINATIM_URL}?${params}`, { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`Nominatim error: ${r.status}`)
        return r.json() as Promise<NominatimResult[]>
      })
      .then((data) => {
        setResults(data)
        setOpen(data.length > 0)
      })
      .catch(() => {
        // Aborted or failed lookups simply leave the previous suggestions in place.
      })

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

  return (
    <div ref={wrapperRef} className="relative">
      <input
        id={id}
        value={value}
        autoComplete="off"
        onChange={(e) => {
          onChange(e.target.value)
          setOpen(true)
        }}
        onFocus={() => results.length > 0 && setOpen(true)}
        placeholder={placeholder}
        className={inputClass}
      />
      {open && results.length > 0 && (
        <ul className="absolute z-50 top-full left-0 right-0 mt-1 rounded-lg border border-dark-border bg-dark-card shadow-xl overflow-hidden list-none m-0 p-0">
          {results.map((r) => (
            <li key={r.place_id}>
              <button
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
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function CoordsHint({ coords }: { coords: LocationCoords | null }) {
  if (!coords) return null
  return (
    <span className="text-[11px] text-emerald-500/70 mt-1 block font-outfit">
      📍 {coords.lat.toFixed(4)}, {coords.lon.toFixed(4)}
    </span>
  )
}

export function PredictorForm({
  origin, setOrigin, destination, setDestination,
  originCoords, setOriginCoords, destinationCoords, setDestinationCoords,
  date, setDate, time, setTime, loading, onSubmit,
}: PredictorFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!loading) onSubmit()
  }

  return (
    <div className="max-w-[800px] mx-auto">
      <form onSubmit={handleSubmit} className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="predictor-origin" className={labelClass}>Partenza</label>
            <AddressAutocomplete
              id="predictor-origin"
              value={origin}
              onChange={(v) => { setOrigin(v); setOriginCoords(null) }}
              onSelect={(name, coords) => { setOrigin(shortPlaceName(name)); setOriginCoords(coords) }}
              placeholder="es. Milano, Italia"
            />
            <CoordsHint coords={originCoords} />
          </div>
          <div>
            <label htmlFor="predictor-destination" className={labelClass}>Destinazione</label>
            <AddressAutocomplete
              id="predictor-destination"
              value={destination}
              onChange={(v) => { setDestination(v); setDestinationCoords(null) }}
              onSelect={(name, coords) => { setDestination(shortPlaceName(name)); setDestinationCoords(coords) }}
              placeholder="es. Roma, Italia"
            />
            <CoordsHint coords={destinationCoords} />
          </div>
          <div>
            <label htmlFor="predictor-date" className={labelClass}>Data partenza</label>
            <input id="predictor-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="predictor-time" className={labelClass}>Ora partenza</label>
            <input id="predictor-time" type="time" value={time} onChange={(e) => setTime(e.target.value)} className={inputClass} />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-5 py-4 rounded-xl border-none font-bold text-base text-white font-outfit transition-all ${
            loading
              ? 'bg-dark-border cursor-not-allowed'
              : 'bg-gradient-to-r from-primary-500 to-primary-700 cursor-pointer hover:shadow-lg hover:shadow-primary-500/25'
          }`}
        >
          {loading ? '⏳ Analisi in corso...' : '🚛 Analizza Percorso'}
        </button>
      </form>
    </div>
  )
}
