const express = require('express')
const router = express.Router()
const {createProduct,
    getAllProduct,
    getProductbyId,
    updateProduct,
    deleteProduct} = require('../controllers/productController')



router.route('/product/new').post(createProduct)
router.route('/product/all').get(getAllProduct)
router.route('/product/:id').get(getProductbyId)
router.route('/product/update/:id').put(updateProduct)
router.route('/product/delete/:id').delete(deleteProduct)



module.exports = router