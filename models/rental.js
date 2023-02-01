const mongoose = require("mongoose")
const Schema = mongoose.Schema

const rental = new Schema({
    
    tenant_name:String,
    phone:String,
    electricity_unit_no:String,
    water_bill_unit_no:String,
    agreement_file:String,
    rent:Number,
    previous_tenant:String,
    onboarding:String
})

module.exports = mongoose.model("rental",rental)