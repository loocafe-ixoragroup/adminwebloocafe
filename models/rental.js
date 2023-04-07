const mongoose = require("mongoose")
const Schema = mongoose.Schema

const rental = new Schema({
    
    tenant_name:String,
    phone:String,
    agreement_file:String,
    images:Array,
    monthly_rent:Number,
    security_deposit:Number,
    previous_tenant:String,
    onboarding:String,
    electricity_unit_no:String,
    water_bill_unit_no:String,
    agreement_start:String,
    agreement_end:String,
    unit_start_date:String,
    rental_collection:{
        type:String,
        default:"Pending"
    },
    state:String,
    city:String,
    first_six_months_rent:Number
})

module.exports = mongoose.model("rental",rental)