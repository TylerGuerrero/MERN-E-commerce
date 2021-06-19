import express from 'express'

import { getAllProducts, getOneProduct} from '../controllers/ProductController.js'

const router = express.Router()

// @descr GET all products
// @route api/products
// @access Public

router.get('/', getAllProducts)

// @descr GET a product by id from db
// @route GET api/products/:id
// @access Public

router.get('/:id', getOneProduct)

export default router

