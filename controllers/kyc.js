const cleanerSchema = require("../models/cleaner")
const loocafeSchema = require("../models/loocafe")
const partnerSchema = require("../models/partner")
const rentalSchema = require("../models/rental")

module.exports.addKyc = async(req,res)=>{
try{
    console.log(req.body);

    const cleaner = new cleanerSchema({
        name:req.body.cleaner_name,
        phone:req.body.cleaner_phone,
        aadhar:req.body.cleaner_aadhar,
        pan:req.body.cleaner_pan
    })
    await cleaner.save()

    const partner = new partnerSchema({
        name:req.body.partner_name,
        phone:req.body.partner_phone,
        aadhar:req.body.partner_aadhar,
        pan:req.body.partner_pan,
        alternate_phone:req.body.partner_alternate_phone
    })

    await partner.save()

    const rental = new rentalSchema({
        security_deposit:Number(req.body.security_deposit),
        monthly_rent:Number(req.body.monthly_rent),
        tenant_name:req.body.tenant_name,
        phone:req.body.rental_phone,
        previous_tenant:req.body.previous_tenant,
        onboarding:req.body.onboarding
    })
    await rental.save()
    cleaner.rental = rental._id

    const loocafe = new loocafeSchema({
        name:req.body.loocafe_name,
        type:req.body.loocafe_type,
        coordinates:{
            latitude:req.body.latitude,
            longitude:req.body.longitude
        },
        location:{
            address:req.body.loocafe_address,
            pincode:req.body.pincode,
            state:req.body.state,
            city:req.body.city
        },
        electricity_unit_no:req.body.electricity_unit_no,
        water_bill_unit_no:req.body.water_bill_unit_no,
        agreement_start:req.body.agreement_start,
        agreement_end:req.body.agreement_end,
        unit_start_date:req.body.unit_start_date,
        functional_status:req.body.functional_status,
        partnerID:partner._id
    })
    await loocafe.save()

    cleaner.loocafe = loocafe._id
    partner.loocafeID.push(loocafe._id)

    await cleaner.save()
    await partner.save()

    return res.status(200).json({
        success:true,
        message:"data saved successfully"
    })
}
catch(err){
    return res.status(500).json({
        success:false,
        message:"Internal server error "+err
    })

}
}