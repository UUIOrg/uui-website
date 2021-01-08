import morgan from "morgan"
import express from "express"
import dotenv from "dotenv"
import email from "./routes/email.js"
import connectDB from "./config/db.js"

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is running....")
})

app.use("/email", email)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
