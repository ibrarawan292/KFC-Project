
const Category = require('../models/categorySchema')

exports.createCategory= async(req, res, next) =>{
    const body= req.body
    console.log(body)
    try {
        await Category.create(body);
        const category = await Category.find({});
       res.json({
           status: true,
           data: category,
           message: 'Category successfully added'
       })

    } catch (error) {
        next(error)
    }
       
}
exports.getCategory= async(req, res, next) =>{

    try {
       const categories = await Category.find({})
       console.log(categories);
       res.json({
           status: true,
           data: categories,
       })

    } catch (error) {
        next(error)
    }
       
}