import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import usersRouter from "./routes/users.js"

dotenv.config()
const PORT = 5000

const app = express()
// app.use(cors())

app.use(
  cors({
    origin: ["http://localhost:3000", "https://wedding-dv.vercel.app", "*"],
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true
  })
)

app.use(express.json())
app.use("/api/users", usersRouter)

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB)
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}...`)
    )
  } catch (error) {
    console.log("Server error", error.message)
    process.exit(1)
  }
}
start()
