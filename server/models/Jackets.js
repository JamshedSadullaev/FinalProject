//in this file we need to create a schema for Jacket
//title
//description
//img
//price
//not sure how but having it in stock in certain amout 
const { Schema } = require('mongoose');

const jacketSchema = new Schema ({
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
        type: number
    }
});

const Jacket = model('Jacket', jacketSchema);

module.exports = Jacket;