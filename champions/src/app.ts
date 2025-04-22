import express from 'express'
import router from './routes'
import cors from 'cors'

export default function createApp() {
  const app = express()
  const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    maxAge: 86400,
  }
  
  app.use(express.json())
  app.use("/api", router)
  app.use(cors(corsOptions))

  return app
}
