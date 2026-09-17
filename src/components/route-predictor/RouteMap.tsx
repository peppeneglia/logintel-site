import { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, Polyline, CircleMarker, Popup, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { PredictionResult } from '../../types'
import { severityColor } from '../../utils/severity'

interface RouteMapProps {
  result: PredictionResult
}

type LatLng = [number, number]

const DEFAULT_CENTER: LatLng = [43, 11]

function MapAutoFit({ positions }: { positions: LatLng[] }) {
  const map = useMap()
  useEffect(() => {
    if (positions.length > 0) {
      map.fitBounds(L.latLngBounds(positions), { padding: [30, 30] })
    }
  }, [map, positions])
  return null
}

const stormIcon = L.divIcon({
  className: '',
  html: '<div style="background:rgba(239,68,68,0.9);color:white;padding:4px 10px;border-radius:8px;font-size:12px;font-weight:700;white-space:nowrap;font-family:Outfit,sans-serif;box-shadow:0 2px 8px rgba(239,68,68,0.4);">⛈️ Temporale</div>',
  iconSize: [120, 28],
  iconAnchor: [60, 40],
})

const legend = [
  { color: '#10b981', label: 'OK' },
  { color: '#06b6d4', label: 'Lieve' },
  { color: '#f59e0b', label: 'Moderato' },
  { color: '#ef4444', label: 'Severo' },
]

export function RouteMap({ result }: RouteMapProps) {
  const segments = result.prediction.segments
  // Memoised so MapAutoFit only re-fits when the route actually changes,
  // not on every parent re-render (e.g. while typing in the form).
  const positions = useMemo<LatLng[]>(
    () => segments.map((seg) => [seg.lat, seg.lon]),
    [segments],
  )
  const center = positions.length > 0 ? positions[Math.floor(positions.length / 2)] : DEFAULT_CENTER

  return (
    <div className="relative bg-gradient-to-br from-dark-card to-dark rounded-2xl border border-dark-border p-7 overflow-hidden mb-6">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-400 to-cyan-500" />

      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-bold text-slate-100 font-outfit">🗺️ Mappa Percorso</h3>
        <span className="text-xs text-slate-500 font-outfit">
          Leaflet + OpenStreetMap
        </span>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ height: 350 }}>
        <MapContainer
          center={center}
          zoom={6}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <MapAutoFit positions={positions} />

          <Polyline
            positions={positions}
            pathOptions={{ color: '#10b981', weight: 3, opacity: 0.7 }}
          />

          {segments.map((seg) => (
            <CircleMarker
              key={`${seg.km}-${seg.name}`}
              center={[seg.lat, seg.lon]}
              radius={seg.delay > 0 ? 10 : 6}
              pathOptions={{
                color: severityColor(seg.severity),
                fillColor: severityColor(seg.severity),
                fillOpacity: 0.85,
                weight: 2,
              }}
            >
              <Popup>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13 }}>
                  <strong>{seg.name}</strong><br />
                  🌤️ {seg.weather}<br />
                  ⏱️ Ritardo: {seg.delay > 0 ? `+${seg.delay} min` : 'Nessuno'}<br />
                  🌡️ {seg.temp}°C · 💨 {seg.wind} km/h
                </div>
              </Popup>
            </CircleMarker>
          ))}

          {segments
            .filter((seg) => seg.severity === 'high')
            .map((seg) => (
              <Marker
                key={`storm-${seg.km}-${seg.name}`}
                position={[seg.lat, seg.lon]}
                icon={stormIcon}
              />
            ))}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="flex gap-5 justify-center mt-4 flex-wrap">
        {legend.map((l) => (
          <div key={l.label} className="flex items-center gap-1.5 text-xs text-slate-400 font-outfit">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
            {l.label}
          </div>
        ))}
      </div>
    </div>
  )
}
