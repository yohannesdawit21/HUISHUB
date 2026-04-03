# HUISHUB

Digital portal for Haramaya University Information Systems students.

## Tech Stack

- Frontend: React + TypeScript + Vite
- Backend (v1): Fastify + TypeScript + Prisma + SQLite

## Project Structure

- `src/` - React frontend
- `backend/` - join-request API service

## Getting Started

1. Install dependencies at the root:

   ```bash
   npm install
   ```

2. Install backend dependencies (already included if cloned with lockfiles, run if needed):

   ```bash
   npm install --prefix backend
   ```

3. Create backend env file:

   ```bash
   cp backend/.env.example backend/.env
   ```

4. Run Prisma migration:

   ```bash
   npm run prisma:migrate --prefix backend -- --name init_join_requests
   ```

5. Start frontend + backend together:

   ```bash
   npm run dev:all
   ```

Frontend runs on `http://localhost:5173` and backend on `http://localhost:3000`.

## Environment Variables

### Frontend

- `VITE_API_BASE_URL` (see `.env.example`)
  - Default local value: `/api` (proxied by Vite to backend)

### Backend

- `DATABASE_URL` (see `backend/.env.example`)
- `PORT` (default `3000`)
- `CORS_ORIGIN` (default `http://localhost:5173`)

## Available Scripts

### Root

- `npm run dev` - start frontend only
- `npm run dev:backend` - start backend only
- `npm run dev:all` - start frontend and backend together
- `npm run build` - build frontend
- `npm run build:backend` - build backend

### Backend

- `npm run dev --prefix backend`
- `npm run build --prefix backend`
- `npm run prisma:generate --prefix backend`
- `npm run prisma:migrate --prefix backend`

## API (v1)

- `GET /health`
- `POST /api/join-requests`
  - body: `{ fullName, studentId, year, email }`
