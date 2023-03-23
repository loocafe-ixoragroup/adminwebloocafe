const mongoose = require("mongoose")
const Schema = mongoose.Schema

const user = new Schema({
    userId:String,
    password:String,
    email:String,
    phone:String,
    full_name:String,
    state:String,
    city:String,
    profile:String,
    dob:String,
    bloodgroup:String,
    gender:String,
    disability:String,
    role:{
        type:String,
        default:"user"
    },
    schemaId:mongoose.SchemaTypes.ObjectId
    
})

module.exports = mongoose.model("user",user)