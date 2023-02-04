const mongoose = require("mongoose")
const Schema = mongoose.Schema

const qr = new Schema({
    
   id: Number,
   qr:String,
   loocafeID:mongoose.SchemaTypes.ObjectId
})

module.exports = mongoose.model("qr",qr)