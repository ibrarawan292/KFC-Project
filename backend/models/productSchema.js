const mongoose  = require ('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
        title: {
            type: String,
            required: [true, 'title is required'],
            minlength: [5, 'At least 4 characters required']
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            required: [true, 'price is required']
        },
        rating:{
            type: Number,
            default:0
        },
        productImage:{
           type:String  
        },
        // productImage: [
        //     {
        //         secure_url:{
        //             type:String,
        //             required:true
        //         },
        //         secure_url:{
        //             type:String,
        //             required:true
        //         }
        //     }
        // ],
        slug:{
            type: String,
        },
        categories:{
            type: String,
            required: [true, 'category is required'],
        },
        Stock: {
            type:Number,
            required:[true, "please enter product stock"],
            maxlength:[4, "stock cannot exceed 4 characters"],
            default:1
        },
        // numOfReviews:{
        //     type:Number,
        //     default:0
        // },
        // reviews:[
        //     {
        //         name:{
        //             type:String,
        //             required:true,
        //         },
        //         rating:{
        //             type:Number,
        //             required:true,
        //         },
        //         comment:{
        //             type:String,
        //             required:true
        //         }
        //     }
        // ],
        createdAt:{
            type:Date,
            default:Date.now
        }
});


const Product = mongoose.model('product', productSchema);
module.exports = Product;
