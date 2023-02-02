const mongoose = require("mongoose")
const Schema = mongoose.Schema

const partner = new Schema({
    
    name:String,
    phone:String,
    alternate_phone:String,
    aadhar:String,
    pan:String,
    files:Array,
    loocafeID:[mongoose.SchemaTypes.ObjectId]
})

module.exports = mongoose.model("partner",partner)