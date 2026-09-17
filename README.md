<div align="center">

<img src="public/truck.svg" alt="Logintel logo" width="88" />

# Logintel

**The AI assistant for European fleet managers.**

Marketing site and interactive Route Intelligence demo, built for the
**NextOrbit by Deloitte** incubation program.

[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?logo=leaflet&logoColor=white)](https://leafletjs.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## Table of contents

- [About the project](#about-the-project)
- [Built for NextOrbit by Deloitte](#built-for-nextorbit-by-deloitte)
- [What the site covers](#what-the-site-covers)
- [Route Intelligence demo](#route-intelligence-demo)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Lead capture (optional)](#lead-capture-optional)
- [Project structure](#project-structure)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Design system](#design-system)
- [Team](#team)
- [License](#license)

---

## About the project

Fleet managers at small and mid-sized European carriers still run their operations across
spreadsheets, phone calls and disconnected apps. **Logintel** is a SaaS that brings everything
into a single conversational web app: you ask a question in natural language, the AI assistant
queries the right vertical module and returns an operational answer.

This repository contains the **public marketing site** (in Italian) for Logintel. It presents the
product, its six modules, the pricing model and the team, and it ships a **working Route
Intelligence demo** that predicts weather-related delays on a truck route.

The web app itself lives in a separate codebase. Every primary call to action on the site links
to it.

---

## Built for NextOrbit by Deloitte

Logintel was created as part of **NextOrbit**, the incubation program run by Deloitte. The
program provides mentorship, a network of industry contacts and strategic support to bring the
product to the European market.

This site was designed and built for that context: it is the public face of the venture during
the program, the landing page shared with mentors, potential customers and partners, and the
place where the Route Intelligence predictor can be tried live without signing up.

---

## What the site covers

| Route                       | Page                     | What it shows                                                        |
| --------------------------- | ------------------------ | -------------------------------------------------------------------- |
| `/`                         | Home                     | Problem, solution, module overview, why Logintel                     |
| `/web-app`                  | Web App                  | The conversational interface and the credit-based usage model        |
| `/moduli`                   | Modules                  | Overview of the six vertical modules                                 |
| `/route-intelligence`       | Route Intelligence       | Weather-aware delay prediction, with a live in-page demo             |
| `/fleet-intelligence`       | Fleet Intelligence       | Vehicles, preventive maintenance, resource allocation                |
| `/delivery-intelligence`    | Delivery Intelligence    | Delivery tracking and last-mile optimisation                         |
| `/compliance-intelligence`  | Compliance Intelligence  | Driving hours, rest periods, EU regulations                          |
| `/finance-intelligence`     | Finance Intelligence     | Fuel, tolls and per-route margins                                    |
| `/carbon-intelligence`      | Carbon Intelligence      | CO₂ footprint and ESG reporting                                      |
| `/pricing`                  | Pricing                  | Free / Pro / Enterprise tiers and FAQ                                |
| `/chi-siamo`                | About                    | Mission, team and the NextOrbit program                              |
| `/contatti`                 | Contact                  | Demo request form                                                    |

Every page carries two calls to action that open the web app: **Guarda la demo** (guided demo
mode, `?demo=true`) and **Accedi alla web app**. Both URLs live in `src/config.ts`.

Any unknown path renders a 404 page.

---

## Route Intelligence demo

The Route Intelligence page embeds an interactive **Route Predictor**:

1. **Address autocomplete** for origin and destination, powered by OpenStreetMap Nominatim
   (limited to IT, DE, FR, ES, NL, AT, CH, BE).
2. **Departure date and time**, defaulting to tomorrow.
3. A **prediction request** to the Logintel prediction API. If no API is configured, or the
   request fails, the demo falls back to a built-in Milan → Rome sample and shows a notice.
4. **Result cards** (predicted delay, confidence, severity, best alternative), an interactive
   **Leaflet map** on CARTO dark tiles with per-segment weather markers, and a **segment
   breakdown** table.
5. An optional **email gate** to request the full PDF report.

The whole page is code-split, so Leaflet is only downloaded when the route is visited.

---

## Tech stack

| Layer          | Choice                                        |
| -------------- | --------------------------------------------- |
| Build tool     | Vite 6                                        |
| UI             | React 18 + TypeScript 5.6                     |
| Styling        | Tailwind CSS 3, Outfit + JetBrains Mono fonts |
| Routing        | React Router DOM 6 (client-side SPA)          |
| Maps           | Leaflet + react-leaflet, CARTO dark basemap   |
| Geocoding      | OpenStreetMap Nominatim                       |
| Lead capture   | Supabase (optional, env-based)                |
| Linting        | ESLint 9 + typescript-eslint                  |
| Hosting        | Vercel                                        |

---

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone the repository
git clone <repository-url>
cd logintel-site

# 2. Install dependencies
npm install

# 3. (Optional) configure environment variables
cp .env.example .env

# 4. Start the dev server
npm run dev
```

The site runs at `http://localhost:5173`. With no `.env` file the site works out of the box:
the Route Predictor uses sample data and the contact forms run in demo mode.

---

## Environment variables

All variables are optional. Copy `.env.example` to `.env` and fill in what you need.

| Variable                 | Purpose                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| `VITE_API_BASE_URL`      | Base URL of the prediction API (no trailing slash). Empty = Route Predictor uses sample data. |
| `VITE_SUPABASE_URL`      | Supabase project URL used for lead capture.                                                 |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key. Both Supabase vars empty = forms run in demo mode.                  |

Never commit a real `.env`. It is ignored by git.

---

## Lead capture (optional)

When Supabase is configured, the contact form and the report request write to a `leads` table.
A minimal schema:

```sql
create table public.leads (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome       text,
  azienda    text,
  email      text not null,
  veicoli    text,
  messaggio  text,
  source     text not null  -- 'contact_form' | 'route_predictor'
);

alter table public.leads enable row level security;

create policy "anon can insert leads"
  on public.leads for insert
  to anon
  with check (true);
```

The anonymous key only needs `insert` on this table.

---

## Project structure

```
src/
  App.tsx                      # Router, layout shell, lazy-loaded Route Intelligence
  main.tsx                     # Entry point
  index.css                    # Tailwind directives + global styles
  config.ts                    # APP_URL / APP_DEMO_URL used by all CTAs
  vite-env.d.ts                # Typed import.meta.env
  types/index.ts               # Severity, Segment, PredictionResult, LeadForm, ...
  lib/supabase.ts              # Supabase client (null when not configured)
  data/mockPrediction.ts       # Milan → Rome sample prediction
  hooks/usePageTitle.ts        # Per-page document.title
  utils/
    severity.ts                # Severity → colour / label helpers
    validation.ts              # Email validation
  components/
    layout/                    # Navbar, Footer
    route-predictor/           # PredictorForm, ResultCards, RouteMap, SegmentBreakdown, LeadGate
  pages/                       # One component per route
    modules/                   # The six *IntelligencePage components
public/
  truck.svg                    # Favicon / logo
```

---

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR            |
| `npm run build`   | Type-check (`tsc -b`) and build to `dist/`    |
| `npm run preview` | Serve the production build locally            |
| `npm run lint`    | Run ESLint over the project                   |

---

## Deployment

The site is a static SPA. `vercel.json` rewrites every path to `index.html` so client-side
routing works on refresh and deep links. Deploying to Vercel requires no extra configuration
beyond setting the environment variables above in the project settings.

Any static host that supports SPA rewrites (Netlify, Cloudflare Pages, GitHub Pages with a
fallback) works the same way.

---

## Design system

- **Theme:** fixed dark mode. Background `#0f172a`, cards `#1e293b`, borders `#334155`.
- **Primary:** emerald `#10b981`. **Accent:** cyan `#06b6d4` for gradients.
- **Typography:** Outfit for UI, JetBrains Mono for data.
- **Pattern:** gradient cards with a 3 px coloured top border on radial-gradient section backgrounds.

Tailwind tokens for these values live in `tailwind.config.js` (`primary-*`, `dark`, `dark-card`, `dark-border`).

---

## Team

| Name                  | Role |
| --------------------- | ---- |
| Giuseppe Neglia       | CEO  |
| Luigi Antonio Leccese | CSO  |
| Vittorio D'Alba       | CTO  |

Based in Bari, Italy.

---

## License

This repository is published to showcase the project. No open-source license has been granted:
all rights reserved © Logintel.
