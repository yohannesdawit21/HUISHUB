import type { FastifyPluginAsync } from 'fastify'
import { z } from 'zod'
import { prisma } from '../db.js'

const joinRequestSchema = z.object({
  email: z.email().max(160),
  fullName: z.string().trim().min(2).max(120),
  studentId: z.string().trim().min(2).max(40),
  year: z.string().trim().min(2).max(32),
})

export const joinRequestsRoute: FastifyPluginAsync = async (app) => {
  app.post('/join-requests', async (request, reply) => {
    const parsedBody = joinRequestSchema.safeParse(request.body)

    if (!parsedBody.success) {
      return reply.status(400).send({
        details: parsedBody.error.flatten(),
        error: 'Invalid request payload.',
      })
    }

    const createdRequest = await prisma.joinRequest.create({
      data: parsedBody.data,
      select: {
        createdAt: true,
        id: true,
      },
    })

    return reply.status(201).send(createdRequest)
  })
}
