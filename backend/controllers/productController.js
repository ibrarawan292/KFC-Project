const Product = require('../models/productSchema')

exports.createProduct= async (req, res, next) =>{

    const body = req.body;
    try {
        await Product.create(body);
        res.json({
            status: true,
            message: 'success',
        })
    } catch (error) {
        next(error)
    }
       
}
exports.getAllProduct= async(req, res, next) =>{

    try {
       const products = await Product.find({})
       res.json({
           status: true,
           data: products,
       })

    } catch (error) {
        next(error)
    }
       
}
exports.getProductbyId= async (req, res, next) =>{
     const id = req.params.id;
    try {
        const products = await Product.findById(id)
        res.json({
            status: true,
            data: products,
        })
    } catch (error) {
       next(error)
    }
        
}
exports.updateProduct= async (req, res, next) =>{
        const id = req.params.id;
        const body = req.body;
    try {
        const products = await Product.findByIdAndUpdate(id, body)
        res.json({
            status: true,
            data: products
        })
    } catch (error) {
       next(error)
    }
        
}
exports.deleteProduct= async (req, res, next) =>{
    const id = req.params.id;
    try {
        const products = await Product.findByIdAndDelete(id)
        res.json({
            status: true,
            data:products
        })
    } catch (error) {
        next(error)
    }
}
