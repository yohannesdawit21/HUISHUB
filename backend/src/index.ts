import Fastify from 'fastify'
import cors from '@fastify/cors'
import { prisma } from './db.js'
import { env } from './env.js'
import { joinRequestsRoute } from './routes/joinRequests.js'

const app = Fastify({
  logger: true,
})

await app.register(cors, {
  origin: env.corsOrigin,
})

app.get('/health', async () => ({ status: 'ok' }))

await app.register(joinRequestsRoute, {
  prefix: '/api',
})

const shutdown = async () => {
  await app.close()
  await prisma.$disconnect()
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

try {
  await app.listen({
    host: '0.0.0.0',
    port: env.port,
  })
} catch (error) {
  app.log.error(error)
  await shutdown()
  process.exit(1)
}
