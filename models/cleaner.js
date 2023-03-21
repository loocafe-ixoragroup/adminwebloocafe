const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cleaner = new Schema({
    
    name:String,
    phone:String,
    relative_name:String,
    email:String,
    alternate_phone:String,
    address:{
        street_address:String,
        state:String,
        city:String,
        pincode:String,
    },
    dob:String,
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
    electricity_bill:String,
    photo:String
})

module.exports = mongoose.model("cleaner",cleaner)