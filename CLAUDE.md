# Logintel — Site

## Progetto
Sito marketing/landing per **Logintel**, SaaS di fleet management per trasportatori europei,
realizzato nell'ambito del programma di incubazione **NextOrbit by Deloitte**.
Lingua del sito: **italiano**. README in inglese.
La web app è un progetto separato: gli URL pubblici sono centralizzati in `src/config.ts` (`APP_URL`, `APP_DEMO_URL`).

## Stack
- **Vite 6** + React 18 + TypeScript 5.6
- **Tailwind CSS 3** (config in `tailwind.config.js`)
- **React Router DOM 6** (SPA, client-side routing)
- **Leaflet / react-leaflet** per mappe (CSS importato da npm, non da CDN)
- **Supabase** per lead capture (opzionale, env-based)
- Deploy: **Vercel** (`vercel.json` con SPA rewrite)

## Struttura
```
src/
  App.tsx              # Router principale; RouteIntelligencePage è lazy-loaded
  main.tsx             # Entry point
  index.css            # Tailwind directives + stili globali (unico CSS)
  config.ts            # APP_URL / APP_DEMO_URL usati da tutti i CTA
  vite-env.d.ts        # Tipizzazione di import.meta.env
  types/index.ts       # Severity, Segment, PredictionResult, LeadForm, ...
  lib/supabase.ts      # Client Supabase (null se env non configurato)
  data/mockPrediction.ts
  hooks/usePageTitle.ts   # document.title per pagina
  utils/
    severity.ts        # Severity → colore / label
    validation.ts      # isValidEmail
  components/
    layout/
      Navbar.tsx       # Voci: Home, Web App, Moduli, Pricing, Chi Siamo (Contatti solo nel footer)
      Footer.tsx
    route-predictor/
      PredictorForm.tsx
      ResultCards.tsx
      SegmentBreakdown.tsx
      RouteMap.tsx
      LeadGate.tsx
  pages/
    HomePage.tsx
    ProdottoPage.tsx         # route: /web-app (pagina "Web App")
    ModuliPage.tsx            # route: /moduli
    PricingPage.tsx
    ChiSiamoPage.tsx
    ContattiPage.tsx
    NotFoundPage.tsx          # route: *
    modules/
      RouteIntelligencePage.tsx
      FleetIntelligencePage.tsx
      DeliveryIntelligencePage.tsx
      ComplianceIntelligencePage.tsx
      FinanceIntelligencePage.tsx
      CarbonIntelligencePage.tsx
public/
  truck.svg            # Favicon / logo
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
| `*`                         | NotFoundPage              |

## Design system
- **Dark theme** fisso: bg `#0f172a`, cards `#1e293b`, borders `#334155`
- **Colore primario**: emerald (`#10b981` / primary-500)
- **Accento**: cyan-500 per gradienti
- **Font**: Outfit (UI), JetBrains Mono (code/dati)
- Pattern: gradient cards con top border colorato da 3px, radial gradient backgrounds

## Comandi
```bash
npm run dev      # Dev server (Vite)
npm run build    # tsc -b + vite build → dist/
npm run preview  # Preview build locale
npm run lint     # ESLint
```

## Env vars
Tutte opzionali; vedi `.env.example`. `.env` è ignorato da git.
```
VITE_API_BASE_URL=...        # API predizioni; vuoto → Route Predictor usa dati di esempio
VITE_SUPABASE_URL=...        # Lead capture; vuoto → form in modalità demo
VITE_SUPABASE_ANON_KEY=...
```

## Convenzioni
- Componenti: named exports, PascalCase
- Pagine in `src/pages/`, componenti in `src/components/`
- Tailwind inline, nessun CSS module (solo `index.css`)
- Titolo pagina via `usePageTitle('… — Logintel')`, non `useEffect` manuale
- CTA: "Accedi alla web app" → `APP_URL`, "Guarda la demo" → `APP_DEMO_URL` (da `src/config.ts`), mai URL hardcoded
- **Nessun indirizzo email** sul sito: il contatto passa dal form in `/contatti`
- Form: sempre `<form onSubmit>` con `label htmlFor`, errori Supabase mostrati all'utente
- Repository pubblico: mai committare `.env`, URL di backend o chiavi
- Il sito è un marketing site; la logica applicativa è sulla web app separata
