import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { ComeFunzionaPage } from './pages/ComeFunzionaPage'
import { RoutePredictorPage } from './pages/RoutePredictorPage'
import { ContattiPage } from './pages/ContattiPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark text-slate-100 font-outfit">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/come-funziona" element={<ComeFunzionaPage />} />
            <Route path="/route-predictor" element={<RoutePredictorPage />} />
            <Route path="/contatti" element={<ContattiPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}