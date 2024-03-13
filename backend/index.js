import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import usersRouter from "./src/routes/users.js"

dotenv.config()
const PORT = 5000

const app = express()

app.use(
  cors({
    origin: [
      "http://localhost:5000/",
      "https://wedding-api-two.vercel.app/",
      "*",
      null
    ]
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
