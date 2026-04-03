# HUISHUB

HUISHUB is a modern web portal for the Haramaya University Information Systems student community.  
It presents the department identity, explains the Information Systems field, shows year-based curriculum schedules, highlights career pathways, and connects students to the HUISHUB Telegram community.

## About The Website

The current website is a responsive single-page experience built to serve as a clean academic and community-facing platform. It includes:

- A branded hero section with the HUISHUB identity and department spotlight
- An About section describing Information Systems in a professional and readable way
- A curriculum section with separate Semester I and Semester II schedule tables for each academic year
- A career section that highlights Information Systems roles, skills, and growth areas
- A responsive navigation system:
  - fixed top navigation on larger screens
  - bottom icon navigation on mobile devices
- Footer details covering security, licensing, availability, support, and rights information

## Tech Stack

- Frontend: React + TypeScript + Vite
- Backend service: Fastify + TypeScript + Prisma
- Styling: custom CSS with responsive layout and component-level UI structure

## Project Structure

- `src/` - main React application
- `public/` - static assets such as logos, favicon, and images
- `backend/` - separate API service

## Running The Project

### Frontend Only

Install dependencies and start the website:

```bash
npm install
npm run dev
```

The frontend runs on `http://localhost:5173`.

### Frontend + Backend

If you also want to run the backend service:

```bash
npm install
npm install --prefix backend
cp backend/.env.example backend/.env
npm run dev:all
```

The backend runs on `http://localhost:3000`.

## Available Scripts

### Root

- `npm run dev` - start the frontend
- `npm run dev:backend` - start the backend only
- `npm run dev:all` - start frontend and backend together
- `npm run build` - build the frontend for production
- `npm run build:backend` - build the backend
- `npm run lint` - run ESLint
- `npm run preview` - preview the frontend production build

### Backend

- `npm run dev --prefix backend` - run the backend in watch mode
- `npm run build --prefix backend` - build the backend
- `npm run prisma:generate --prefix backend` - generate Prisma client
- `npm run prisma:migrate --prefix backend` - run Prisma migrations
- `npm run prisma:studio --prefix backend` - open Prisma Studio

## Environment Variables

### Frontend

- `VITE_API_BASE_URL`
  - default example value: `/api`

### Backend

- `DATABASE_URL`
- `PORT`
- `CORS_ORIGIN`

See:

- [`.env.example`](/home/yotor/Desktop/Projects/HUISHUB/.env.example)
- [`backend/.env.example`](/home/yotor/Desktop/Projects/HUISHUB/backend/.env.example)

## Notes

- The current public website is focused on the frontend portal experience.
- The backend service remains available as a separate part of the project.
- The site is designed to be mobile-friendly, visually branded, and suitable for hosting as a student community web presence.
