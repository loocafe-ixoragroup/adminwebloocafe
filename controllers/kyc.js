const { ObjectID } = require("bson")
const cleanerSchema = require("../models/cleaner")
const loocafeSchema = require("../models/loocafe")
const partnerSchema = require("../models/partner")
const rentalSchema = require("../models/rental")
const {fileUploader} = require("../utils/fileUploader")
const qrcode = require("qrcode")
const loocafe = require("../models/loocafe")
const qrSchema = require("../models/qr")

module.exports.addKyc = async(req,res)=>{
try{
    // console.log(req.body);

    const cleaner = new cleanerSchema({
        name:req.body.cleaner_name,
        phone:req.body.cleaner_phone,
        relative_name:req.body.relative_name,
        email:req.body.email,
        alternate_phone:req.body.cleaner_alternate_phone,
        address:{
            street_address:req.body.street_address,
            city:req.body.cleaner_city,
            pincode:req.body.cleaner_pincode,
            state:req.body.cleaner_state
        }
    })
    await cleaner.save()

    const partner = new partnerSchema({
        name:req.body.partner_name,
        phone:req.body.partner_phone,
        alternate_phone:req.body.partner_alternate_phone
    })

    await partner.save()

    const rental = new rentalSchema({
        security_deposit:Number(req.body.security_deposit),
        monthly_rent:Number(req.body.monthly_rent),
        tenant_name:req.body.tenant_name,
        phone:req.body.rental_phone,
        previous_tenant:req.body.previous_tenant,
        unit_start_date:req.body.rental_start_date,
        electricity_unit_no:req.body.rental_electricity,
        water_bill_unit_no:req.body.rental_water,
        agreement_start:req.body.agreement_start,
        agreement_end:req.body.agreement_end,
        unit_start_date:req.body.unit_start_date,

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
        supervisorID:ObjectID(req.body.supervisor),
        timing:{
            from:req.body.timing_from,
            to:req.body.timing_to
        },
        partnerID:partner._id
    })
    await loocafe.save()

    cleaner.loocafe = loocafe._id
    partner.loocafeID.push(loocafe._id)

    await cleaner.save()
    await partner.save()

    req.files.forEach(async(file)=>{

        fileUploader(file,cleaner,rental)
        

    })
    const data = await loocafeSchema.findById(loocafe._id)


    qrcode.toDataURL(
        
`Loocafe name: ${data.name}
Loocafe Type: ${data.type}
Location : ${data.location}
Coordinates: ${data.coordinates}
`, 
        
    
        async function (err, url) {
        if(err){
            console.log(err)
        }
        const all_qrdata = await qrSchema.find({})
        console.log(all_qrdata, all_qrdata.length)
        if(all_qrdata != undefined && all_qrdata.length != 0){
            const len = all_qrdata.length-1
            const qrdata = new qrSchema({
                qr:url,
                id:(all_qrdata[len].id+1),
                loocafeID:loocafe._id
            })
            await qrdata.save()
        }
        
        else{
            const qrdata = new qrSchema({
                qr:url,
                id:1,
                loocafeID:loocafe._id
            })
            await qrdata.save()


        }
        return res.status(200).json({
            success:true,
            message:"data saved successfully"
        })
       
      })
      
      
}
catch(err){
    return res.status(500).json({
        success:false,
        message:"Internal server error "+err
    })

}
}