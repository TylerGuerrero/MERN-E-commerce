import dotenv from 'dotenv'
dotenv.config()

import { products } from './data/products.js'
import Products from './models/ProductModel.js'
import connectDB from './config/db.js'

connectDB()

export const importData = async () => {
    try {
        await Products.deleteMany({})
        await Products.insertMany(products)
        console.log('Data import success')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }   
}

importData()