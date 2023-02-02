const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cleaner = new Schema({
    
    name:String,
    phone:String,
    loocafe:mongoose.SchemaTypes.ObjectId,
    rental:mongoose.SchemaTypes.ObjectId,
    rent_paid:{
        type:Boolean,
        default:false
    },
    attendance:[{
        images:Array,
        date:String,
        time:String
    }],
    aadhar:String,
    pan:String,
    files:Array
})

module.exports = mongoose.model("cleaner",cleaner)