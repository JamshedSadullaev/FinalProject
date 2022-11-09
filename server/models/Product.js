//in this file we need to create a schema for Jacket
//title
//description
//img
//price
//not sure how but having it in stock in certain amout 
const { Schema, model } = require('mongoose');

const productSchema = new Schema ({
    title:{
        type: String,
        required: true, 
        trim: true
    },
    description: {
        type: String,
       
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number
    }
});

const Product = model('Product', productSchema);

module.exports = Product;