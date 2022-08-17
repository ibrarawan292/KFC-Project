const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    categories: {
        type: String,
        required: [true, 'category is required'],
   

    },
    slug: {
        type: String,
    }

},

    {
        timestamps: true


    });


const Category = mongoose.model('category', categorySchema);
module.exports = Category;
