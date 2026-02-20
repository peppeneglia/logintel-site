export interface RoutePoint {
  lat: number
  lon: number
  name?: string
}

export interface Segment {
  km: number
  name: string
  lat: number
  lon: number
  weather: string
  delay: number
  severity: 'none' | 'low' | 'moderate' | 'high'
  temp: number
  wind: number
}

export interface Alternative {
  name: string
  distance_km: number
  base_duration_minutes: number
  total_delay_minutes: number
  adjusted_duration_minutes: number
  savings_minutes: number
}

export interface PredictionResult {
  id: string
  route: {
    origin: RoutePoint & { name: string }
    destination: RoutePoint & { name: string }
    distance_km: number
    base_duration_minutes: number
  }
  prediction: {
    total_delay_minutes: number
    confidence_score: number
    severity: 'none' | 'low' | 'moderate' | 'high'
    adjusted_duration_minutes: number
    segments: Segment[]
  }
  alternative: Alternative
}

export interface LeadForm {
  nome: string
  azienda: string
  email: string
  veicoli: string
  messaggio: string
}