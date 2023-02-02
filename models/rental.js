const mongoose = require("mongoose")
const Schema = mongoose.Schema

const rental = new Schema({
    
    tenant_name:String,
    phone:String,
    agreement_file:String,
    monthly_rent:Number,
    security_deposit:Number,
    previous_tenant:String,
    onboarding:String,
    rental_collection:{
        type:String,
        default:"Pending"
    }
})

module.exports = mongoose.model("rental",rental)