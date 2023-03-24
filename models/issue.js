const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issue = new Schema({
    loocafeName:String,
    loocafeUnitNo:Number,
    loocafeId:mongoose.SchemaTypes.ObjectId,
    supervisorId:mongoose.SchemaTypes.ObjectId,
    description:String
    
},{
    timestamps:true
})

module.exports = mongoose.model("issue",issue)