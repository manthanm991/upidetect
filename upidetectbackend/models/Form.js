const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormSchema = new Schema({
    type: {
        type:String,
        required:true
    },
    amount: {
        type:Number,
        required:true,
    },
    oldbalanceorg: {
        type:Number,
        required:true,
    },
    newbalanceorg: {
        type:Number,
        required:true,
    },
    oldbalancedestination: {
        type:Number,
        required:true,
    },
    newbalancedestination: {
        type:Number,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now
    },
  });

const Form = mongoose.model('form', FormSchema);
module.exports = mongoose.model('form', FormSchema);