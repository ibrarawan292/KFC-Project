const Product = require('../models/productSchema')
const cloudinary = require('cloudinary').v2;

exports.createProduct= async (req, res, next) =>{

    const body = req.body
    const productImage = body.productImage;

    const result = await cloudinary.uploader.upload(productImage,{
        "folder": "KFC"
    })

   body.productImage = result.secure_url

    try {
         await Product.create(body);
        const products = await Product.find({})
        res.json({
            status: true,
            data: products
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
        await Product.findByIdAndDelete(id)
        const products = await Product.find({})
        res.json({
            status: true,
            data:products
        })
    } catch (error) {
        next(error)
    }
}
