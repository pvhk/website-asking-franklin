## Astro + Vercelt

Minimal Astro site configured for Vercel.

### Prerequisites
- Node.js 18+
- A Brevo API Key

### Environment variables
Create a `.env` file (used locally) and set these variables:
```
BREVO_API_KEY=your_brevo_api_key
# Optional: add new subscribers to a specific list
BREVO_LIST_ID=123
```

On Vercel, add the same variables in Project Settings → Environment Variables.

### Develop locally
```bash
npm install
npm run dev
```

Open `http://localhost:4321`

### Production build
```bash
npm run build
npm run preview
```

### Deploy to Vercel
This repo is configured for Vercel with the official adapter.
- Adapter: `@astrojs/vercel` with `output: "hybrid"` (static pages + serverless API)
- No extra config needed

Steps:
1. Push to GitHub
2. Import the repo in Vercel
3. Set `BREVO_API_KEY` (and optional `BREVO_LIST_ID`) in Vercel env vars
4. Deploy

### API route
`POST /api/subscribe-newsletter`
```json
{
  "firstName": "Ada",
  "email": "ada@example.com",
  "lang": "en"
}
```
Responses:
- 200: `{ "success": true, "message": "..." }`
- 400: validation or duplicate email
- 500: configuration or server error
