import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { ProdottoPage } from './pages/ProdottoPage'
import { PricingPage } from './pages/PricingPage'
import { ChiSiamoPage } from './pages/ChiSiamoPage'
import { ContattiPage } from './pages/ContattiPage'
import { ModuliPage } from './pages/ModuliPage'
import { RouteIntelligencePage } from './pages/modules/RouteIntelligencePage'
import { FleetIntelligencePage } from './pages/modules/FleetIntelligencePage'
import { DeliveryIntelligencePage } from './pages/modules/DeliveryIntelligencePage'
import { ComplianceIntelligencePage } from './pages/modules/ComplianceIntelligencePage'
import { FinanceIntelligencePage } from './pages/modules/FinanceIntelligencePage'
import { CarbonIntelligencePage } from './pages/modules/CarbonIntelligencePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-dark text-slate-100 font-outfit">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/web-app" element={<ProdottoPage />} />
            <Route path="/moduli" element={<ModuliPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/chi-siamo" element={<ChiSiamoPage />} />
            <Route path="/contatti" element={<ContattiPage />} />
            <Route path="/route-intelligence" element={<RouteIntelligencePage />} />
            <Route path="/fleet-intelligence" element={<FleetIntelligencePage />} />
            <Route path="/delivery-intelligence" element={<DeliveryIntelligencePage />} />
            <Route path="/compliance-intelligence" element={<ComplianceIntelligencePage />} />
            <Route path="/finance-intelligence" element={<FinanceIntelligencePage />} />
            <Route path="/carbon-intelligence" element={<CarbonIntelligencePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
