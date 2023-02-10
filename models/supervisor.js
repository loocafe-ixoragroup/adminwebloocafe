const mongoose = require("mongoose")
const Schema = mongoose.Schema

const supervisor = new Schema({
    
    name:String,
    username:String,
    phone:String,
    alternate_phone:String,
    password:String,
    state:String,
    city:String,
    photo:String,
    loocafes:[mongoose.SchemaTypes.ObjectId],
    checking_today:mongoose.SchemaTypes.ObjectId
})

module.exports = mongoose.model("supervisor",supervisor)