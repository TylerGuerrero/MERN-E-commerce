import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

import ProductRoutes from './routes/ProductRoutes.js'
import connectDB  from './config/db.js'

connectDB()

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(cors({credentials: true, origin: true}))

app.use('/products', ProductRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})