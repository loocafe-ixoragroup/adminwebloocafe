const mongoose = require("mongoose")
const Schema = mongoose.Schema

const user = new Schema({
    userId:String,
    email:String,
    phone:String,
    full_name:String,
    state:String,
    profile:String,
    dob:String,
    age:String,
    bloodgroup:String,
    gender:String,
    disability:String
    
})

module.exports = mongoose.model("user",user)