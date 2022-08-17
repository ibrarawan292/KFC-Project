const express = require('express')
const router = express.Router()
const {createProduct,
    getAllProduct,
    getProductbyId,
    updateProduct,
    deleteProduct} = require('../controllers/productController')
const {createCategory, getCategory} = require('../controllers/categoryController')



router.route('/product/new').post(createProduct)
router.route('/product/all').get(getAllProduct)
router.route('/product/:id').get(getProductbyId)
router.route('/product/update/:id').put(updateProduct)
router.route('/product/delete/:id').delete(deleteProduct)
router.route('/product/new/category').post(createCategory)
router.route('/product/all/category').get(getCategory)



module.exports = router