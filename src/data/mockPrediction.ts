import { PredictionResult } from '../types'

export const MOCK_PREDICTION: PredictionResult = {
  id: 'pred_abc123',
  route: {
    origin: { name: 'Milano', lat: 45.4642, lon: 9.19 },
    destination: { name: 'Roma', lat: 41.9028, lon: 12.4964 },
    distance_km: 573,
    base_duration_minutes: 345,
  },
  prediction: {
    total_delay_minutes: 27,
    confidence_score: 0.82,
    severity: 'moderate',
    adjusted_duration_minutes: 372,
    segments: [
      { km: 0, name: 'Milano', lat: 45.4642, lon: 9.19, weather: 'Sereno', delay: 0, severity: 'none', temp: 8, wind: 12 },
      { km: 50, name: 'Piacenza', lat: 45.0526, lon: 9.6929, weather: 'Nuvoloso', delay: 0, severity: 'none', temp: 7, wind: 15 },
      { km: 120, name: 'Parma', lat: 44.8015, lon: 10.3279, weather: 'Pioggia leggera', delay: 3, severity: 'low', temp: 6, wind: 18 },
      { km: 200, name: 'Modena', lat: 44.6471, lon: 10.9252, weather: 'Pioggia moderata', delay: 8, severity: 'moderate', temp: 5, wind: 22 },
      { km: 234, name: 'Bologna Sud', lat: 44.4949, lon: 11.3426, weather: 'Temporale', delay: 12, severity: 'high', temp: 4, wind: 35 },
      { km: 300, name: 'Firenze', lat: 43.7696, lon: 11.2558, weather: 'Pioggia leggera', delay: 4, severity: 'low', temp: 7, wind: 14 },
      { km: 400, name: 'Arezzo', lat: 43.4631, lon: 11.8783, weather: 'Nuvoloso', delay: 0, severity: 'none', temp: 9, wind: 10 },
      { km: 480, name: 'Orvieto', lat: 42.7185, lon: 12.1107, weather: 'Sereno', delay: 0, severity: 'none', temp: 11, wind: 8 },
      { km: 573, name: 'Roma', lat: 41.9028, lon: 12.4964, weather: 'Sereno', delay: 0, severity: 'none', temp: 13, wind: 6 },
    ],
  },
  alternative: {
    name: 'Via A14 Adriatica',
    distance_km: 612,
    base_duration_minutes: 368,
    total_delay_minutes: 8,
    adjusted_duration_minutes: 376,
    savings_minutes: 19,
  },
}