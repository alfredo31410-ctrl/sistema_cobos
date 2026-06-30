# Railway Backend Setup - Sistema Cobos

## What Railway should run

Deploy the full Next.js app because the backend lives inside `app/api/[[...path]]/route.js`. Do not deploy only `app/api`.

## Railway service

- Service type: Node.js / Next.js
- Root Directory: repository root (`sistema_cobos`)
- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run start`

`next start` reads `process.env.PORT`, so Railway can inject its runtime port without code changes.

## Healthcheck

- Path: `/api/health`
- Expected response: JSON with `ok: true` and `service: "sistema-cobos-api"`

## Required environment variables

Configure these manually in Railway. Do not commit real values.

- `MONGO_URL`
- `DB_NAME`
- `CORS_ORIGINS`
- `DIAGNOSTICO_SCRIPT_URL`

Optional/public variables used by the current frontend:

- `NEXT_PUBLIC_BASE_URL`
- `NEXT_PUBLIC_PIXEL_ID`

## Vercel frontend

Keep the existing Vercel domain as the public site. To move API execution to Railway without changing the public domain, configure Vercel to rewrite `/api/:path*` to the Railway service URL after the Railway deployment is validated.