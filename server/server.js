import morgan from 'morgan'
import express from 'express'
import dotenv from 'dotenv'
import email from "./routes/email.js"

dotenv.config()


const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }

  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('API is running....')
  })

  app.use('/email', email )

  const PORT = process.env.PORT || 8081

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)