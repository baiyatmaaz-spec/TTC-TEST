# 🚌 Scarborough Transit Truth

An unofficial, crowdsourced real-time delay map for TTC/Scarborough commuters.

## Stack
- React + Vite + Tailwind CSS
- Leaflet.js (map)
- Firebase Firestore (real-time database)

## Features
- Tap map to report delays or outages
- Color-coded markers (green / yellow / red) by report density
- Reports auto-expire after 60 minutes
- No login required

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Render

1. Push this repo to GitHub
2. Go to render.com → New → Static Site
3. Connect your GitHub repo
4. Set:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
5. Click Deploy

That's it — no environment variables needed (Firebase config is in the code).
