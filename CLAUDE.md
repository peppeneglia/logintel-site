# Logintel — Site

## Progetto
Sito marketing/landing per **Logintel**, SaaS di fleet management per trasportatori europei.
Dominio: `logintel.it` — Web app separata su `app.logintel.it`.
Lingua del sito: **italiano**.

## Stack
- **Vite 6** + React 18 + TypeScript 5.6
- **Tailwind CSS 3** (config in `tailwind.config.js`)
- **React Router DOM 6** (SPA, client-side routing)
- **Leaflet / react-leaflet** per mappe
- **Supabase** per lead capture (opzionale, env-based)
- Deploy: **Vercel** (`vercel.json` con SPA rewrite)

## Struttura
```
src/
  App.tsx              # Router principale (BrowserRouter)
  main.tsx             # Entry point
  index.css            # Tailwind directives + stili globali
  types/index.ts       # Tipi: PredictionResult, Segment, LeadForm, etc.
  lib/supabase.ts      # Client Supabase (graceful fallback se no env)
  data/mockPrediction.ts
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    route-predictor/
      PredictorForm.tsx
      ResultCards.tsx
      SegmentBreakdown.tsx
      RouteMap.tsx
      LeadGate.tsx
    ui/
      DarkCard.tsx
  pages/
    HomePage.tsx
    ProdottoPage.tsx         # route: /web-app (pagina "Web App")
    ModuliPage.tsx            # route: /moduli
    PricingPage.tsx
    ChiSiamoPage.tsx
    ContattiPage.tsx
    modules/
      RouteIntelligencePage.tsx
      FleetIntelligencePage.tsx
      DeliveryIntelligencePage.tsx
      ComplianceIntelligencePage.tsx
      FinanceIntelligencePage.tsx
      CarbonIntelligencePage.tsx
  utils/
    severity.ts
public/
  truck.svg            # Favicon
```

## Rotte
| Path                        | Pagina                    |
|-----------------------------|---------------------------|
| `/`                         | HomePage                  |
| `/web-app`                  | ProdottoPage              |
| `/moduli`                   | ModuliPage                |
| `/pricing`                  | PricingPage               |
| `/chi-siamo`                | ChiSiamoPage              |
| `/contatti`                 | ContattiPage              |
| `/route-intelligence`       | RouteIntelligencePage     |
| `/fleet-intelligence`       | FleetIntelligencePage     |
| `/delivery-intelligence`    | DeliveryIntelligencePage  |
| `/compliance-intelligence`  | ComplianceIntelligencePage|
| `/finance-intelligence`     | FinanceIntelligencePage   |
| `/carbon-intelligence`      | CarbonIntelligencePage    |

## Design system
- **Dark theme** fisso: bg `#0f172a`, cards `#1e293b`, borders `#334155`
- **Colore primario**: emerald (`#10b981` / primary-500)
- **Accento**: cyan-500 per gradienti
- **Font**: Outfit (UI), JetBrains Mono (code/dati)
- Pattern: gradient cards con top border colorato da 3px, radial gradient backgrounds

## Comandi
```bash
npm run dev      # Dev server (Vite)
npm run build    # tsc + vite build → dist/
npm run preview  # Preview build locale
npm run lint     # ESLint
```

## Env vars
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## Convenzioni
- Componenti: named exports, PascalCase
- Pagine in `src/pages/`, componenti in `src/components/`
- Tailwind inline, no CSS modules (tranne `App.css` e `index.css`)
- Tutti i CTA principali linkano a `https://app.logintel.it`
- Il sito è un marketing site; la logica applicativa è sulla web app separata
