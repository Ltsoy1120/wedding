import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import usersRouter from "./src/routes/users.js"

dotenv.config()
const PORT = 5000

const app = express()
// app.use(cors())

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://wedding-dv.vercel.app",
      "*",
      null
    ],
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true
  })
)

// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader("Access-Control-Allow-Origin", "*")

//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   )

//   // Request headers you wish to allow
//   res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", true)

//   // Pass to next layer of middleware
//   next()
// })

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
