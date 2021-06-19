import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
};

mongoose.connect(process.env.DB_CONNECT, options)
        .catch((err) => console.log(err))

mongoose.connection.on('error', () => {
    console.log(`MongoDB has a error after initial connection`)
})

mongoose.connection.once('open', () => {
    console.log('MongoDB is running')
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})