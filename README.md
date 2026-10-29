# Linktree Sub‑Application

This folder contains a minimal **Linktree‑style** React app that shows your portrait, title and four navigation cards:

- Alina‑job search → https://alina-brown.vercel.app/
- Tecnocracia → https://tecnocracia.streamlit.app/
- Balearia‑Predictor de consumo → https://baleariatravels.vercel.app/
- Who I am → (returns to the main portfolio homepage)

## How to run locally
```powershell
# From the root of your portfolio repo
cd linktree-app
npm install
# Run on a different port than the main app (default 5174)
npm run dev -- --port 5175
```

Open `http://localhost:5175` in your browser – you should see a dark glass‑morphism UI with your avatar, title and the four cards.

## Deploying
Push the `linktree-app` folder to a separate GitHub repository and connect it to Vercel/Netlify. The build command is `npm run build` and the output folder is `dist`.

## Project structure
```
linktree-app/
├─ index.html          # HTML entry point
├─ package.json        # dependencies (React, Vite, react‑fast‑marquee)
├─ tsconfig.json       # TypeScript config
├─ vite.config.ts      # Vite config (base './')
└─ src/
   ├─ main.tsx         # React bootstrap
   ├─ Linktree.tsx     # UI component with avatar & links
   └─ styles.css       # premium glass‑morphism styling
```

Feel free to customise the styles, add animations or integrate it with the loading screen of the main portfolio site.
