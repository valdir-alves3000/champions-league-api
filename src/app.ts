import cors from 'cors'
import express from 'express'
import { router } from './routes'

const app = express()

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE"]
}

app.use(express.json())
app.use(cors(corsOptions))
app.use("/api", router)

export { app }
