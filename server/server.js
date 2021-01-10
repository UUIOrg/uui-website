import morgan from "morgan"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import email from "./routes/email.js"
import connectDB from "./config/db.js"
import {responseFilter} from "./controllers/responseController.js"

dotenv.config()

connectDB()

const app = express()
app.use(cors());

app.options('*', cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is running....")
})

app.use("/email", email)
app.use("/response", responseFilter)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
