import { config as loadEnv } from 'dotenv'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const currentFile = fileURLToPath(import.meta.url)
const currentDir = dirname(currentFile)
const envPath = resolve(currentDir, '..', '.env')

loadEnv({
  path: envPath,
})

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = 'file:./dev.db'
}

function parsePort(value: string | undefined) {
  if (!value) {
    return 3000
  }

  const parsed = Number.parseInt(value, 10)
  return Number.isNaN(parsed) ? 3000 : parsed
}

export const env = {
  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
  databaseUrl: process.env.DATABASE_URL,
  port: parsePort(process.env.PORT),
}
