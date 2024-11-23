// logger.ts
import pino from 'pino'

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: 'HH:MM:ss Z'
    }
  }
})
