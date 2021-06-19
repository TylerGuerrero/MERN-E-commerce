import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT, options)
        console.log('MongoDB is running')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB