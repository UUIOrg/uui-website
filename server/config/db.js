import mongoose from "mongoose"

const connectDB = async () => {
  try {
    let database_url = process.env.DATABASE_URL
    database_url = database_url.replace(
      "<password>",
      process.env.DATABASE_PASSWORD
    )

    const connection = await mongoose.connect(database_url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      'useFindAndModify': false
    })
    console.log(`MongoDB Connected: ${connection.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    // process.exit(1) -> it going to exit with failure
    process.exit(1)
  }
}

export default connectDB
