const mongoose = require("mongoose")
const Schema = mongoose.Schema

const user = new Schema({
    username:String,
    password:String,
    role:String
    
})

module.exports = mongoose.model("user",user)