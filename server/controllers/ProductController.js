import Product from '../models/ProductModel.js'

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        return res.status(201).json(products)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: error.message})
    }
}

export const getOneProduct = async  (req, res) => {
    const { id } = req.params;

    try {
         const product = await Product.findById(id)
         
         if (!product) {
             throw new Error('Product not Found')
         }

         return res.status(201).json(product)
    } catch (error) {
        console.log(error)
        return res.status(401).json({error: error.message})
    }
} 