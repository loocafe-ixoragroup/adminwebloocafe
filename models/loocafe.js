const mongoose = require("mongoose")
const Schema = mongoose.Schema

const loocafe = new Schema({
    name:String,
    type:String,
    coordinates:{
        latitude:String,
        longitude:String
    },
    location:{
        city:String,
        address:String,
        state:String,
        pincode:String,
    },
    electricity_unit_no:String,
    water_bill_unit_no:String,
    images:Array,
    reviews:[{
        userId:mongoose.SchemaTypes.ObjectID,
        description:String,
        rating:Number,
        images:Array
    }],
    avg_rating:Number,
    timing:{
        from:String,
        to:String
    },
    functional_status:String,

    expenses:[{
        reason:String,
        images:Array,
        receipts:Array,
        date:String,
        amount:Number
    }],
    partnerID:mongoose.SchemaTypes.ObjectId,
    supervisorID: mongoose.SchemaTypes.ObjectId,
    id:Number,
    qr:String
    
})

module.exports = mongoose.model("loocafe",loocafe)