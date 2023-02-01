const mongoose = require("mongoose")
const Schema = mongoose.Schema

const loocafe = new Schema({
    name:String,
    coordinates:{
        latitude:String,
        longitude:String
    },
    city:String,
    address:String,
    images:Array,
    reviews:[{
        userId:mongoose.SchemaTypes.ObjectID,
        description:String,
        rating:Number,
        images:Array
    }],
    avg_rating:Number
    
})

module.exports = mongoose.model("loocafe",loocafe)