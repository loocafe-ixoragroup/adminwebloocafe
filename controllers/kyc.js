const { ObjectID, ObjectId } = require("bson")
const cleanerSchema = require("../models/cleaner")
const loocafeSchema = require("../models/loocafe")
const partnerSchema = require("../models/partner")
const userSchema = require("../models/user")
const rentalSchema = require("../models/rental")
const {fileUploader} = require("../utils/fileUploader")
const qrcode = require("qrcode")
const supervisorSchema = require("../models/supervisor")
const {uploadFileToS3} = require("../utils/s3")

module.exports.addKyc = async(req,res)=>{
try{
    // console.log(req.body);

    const cleaner = new cleanerSchema({
        name:req.body.cleaner_name,
        phone:req.body.cleaner_phone,
        email:req.body.email,
        address:{
            street_address:req.body.street_address,
            city:req.body.cleaner_city,
            state:req.body.cleaner_state
        },
        dob:req.body.dob
    })
    await cleaner.save()
    const user = new userSchema({
        userId:req.body.email,
        phone:req.body.cleaner_phone,
        full_name:req.body.cleaner_name,
        city:req.body.cleaner_city,
        state:req.body.cleaner_state,
        role:"cleaner",
        schemaId:cleaner._id
    })
    await user.save()
    // const partner = new partnerSchema({
    //     name:req.body.partner_name,
    //     phone:req.body.partner_phone,
    //     alternate_phone:req.body.partner_alternate_phone
    // })

    // await partner.save()

    const rental = new rentalSchema({
        security_deposit:Number(req.body.security_deposit),
        monthly_rent:Number(req.body.monthly_rent),
        tenant_name:req.body.tenant_name,
        phone:req.body.rental_phone,
        previous_tenant:req.body.previous_tenant,
        electricity_unit_no:req.body.rental_electricity,
        water_bill_unit_no:req.body.rental_water,
        agreement_start:req.body.agreement_start,
        agreement_end:req.body.agreement_end,
        unit_start_date:req.body.unit_start_date,
        city:req.body.city,
        state:req.body.state
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
            state:req.body.state,
            city:req.body.city,
            pincode:req.body.pincode
        },
        electricity_unit_no:req.body.electricity_unit_no,
        water_bill_unit_no:req.body.water_bill_unit_no,
        supervisorID:ObjectID(req.body.supervisorID),
        timing:{
            from:req.body.timing_from,
            to:req.body.timing_to
        },
        
        rentalID:rental._id,
        functional_status:"Live"
    })
    await loocafe.save()

    cleaner.loocafe = loocafe._id
    // partner.loocafeID.push(loocafe._id)
    await supervisorSchema.findByIdAndUpdate(ObjectID(req.body.supervisorID),{
        $push:{
            loocafes:loocafe._id
        }
    })
    await cleaner.save()
    // await partner.save()
    req.files.forEach(async(file,index)=>{

        fileUploader(file,cleaner,rental)
           
    })
  

    qrcode.toDataURL(
        
`Loocafe name: ${loocafe.name}
Loocafe Type: ${loocafe.type}
Location : ${loocafe.location}
Coordinates: ${loocafe.coordinates}
`, 
        
    
        async function (err, url) {
        if(err){
            console.log(err)
        }
        // console.log("qr")
        const all_loocafes = await loocafeSchema.find({}).sort({_id:-1})
            await loocafeSchema.findByIdAndUpdate(loocafe._id,{
                $set:{
                    id:(all_loocafes.length+1),
                    qr:url
                }
            })
        
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
module.exports.updateKyc = async(req,res)=>{
    try{
        const supervisor = ObjectId(req.body.supervisorID)

        let loocafe = await loocafeSchema.findById(ObjectId(req.params.id))

     const cleaner =  await cleanerSchema.findOneAndUpdate({loocafe:ObjectId(req.params.id)},{
        $set:{
            name:req.body.cleaner_name,
            phone:req.body.cleaner_phone,
            email:req.body.email,
            address:{
                street_address:req.body.street_address,
                city:req.body.cleaner_city,
                state:req.body.cleaner_state
            },
            dob:req.body.dob
        }})
        if(req.body.cleaner_updated === "true"){
            const user = new userSchema({
                userId:req.body.email,
                phone:req.body.cleaner_phone,
                full_name:req.body.cleaner_name,
                city:req.body.cleaner_city,
                state:req.body.cleaner_state,
                role:"cleaner",
                schemaId:cleaner._id
            })
            await user.save()
        }
        // let partner;
        // if(req.body.partner_updated === "true"){
        //     partner = new partnerSchema({
        //         name:req.body.partner_name,
        //         phone:req.body.partner_phone,
        //         alternate_phone:req.body.partner_alternate_phone
        //     })
        //     partner.loocafeID.push(loocafe._id)
        //     await partner.save()
        //     await loocafeSchema.findByIdAndUpdate(loocafe._id,{
        //         $push:{
        //             previousPartners:loocafe.partnerID
        //         }
        //     })
        // }
        // else{
        //     partner = await partnerSchema.findByIdAndUpdate(loocafe.partnerID,{
        //         $set:{
        //             name:req.body.partner_name,
        //             phone:req.body.partner_phone,
        //             alternate_phone:req.body.partner_alternate_phone
        //         }
        //     })
        // }
        
        const rental =  await rentalSchema.findByIdAndUpdate(loocafe.rentalID,{
            $set:{
            security_deposit:Number(req.body.security_deposit),
            monthly_rent:Number(req.body.monthly_rent),
            tenant_name:req.body.tenant_name,
            phone:req.body.rental_phone,
            previous_tenant:req.body.previous_tenant,
            electricity_unit_no:req.body.rental_electricity,
            water_bill_unit_no:req.body.rental_water,
            agreement_start:req.body.agreement_start,
            agreement_end:req.body.agreement_end,
            unit_start_date:req.body.unit_start_date,
            city:req.body.city,
            state:req.body.state
        }},{new:true})

        await loocafeSchema.findByIdAndUpdate(ObjectId(req.params.id),{
            $set:{
            name:req.body.loocafe_name,
            type:req.body.loocafe_type,
            coordinates:{
                latitude:req.body.latitude,
                longitude:req.body.longitude
            },
            location:{
                address:req.body.loocafe_address,
                state:req.body.state,
                city:req.body.city,
                pincode:req.body.pincode

            },
            electricity_unit_no:req.body.electricity_unit_no,
            water_bill_unit_no:req.body.water_bill_unit_no,
            supervisorID:ObjectID(req.body.supervisorID),
            timing:{
                from:req.body.timing_from,
                to:req.body.timing_to
            },
            
            rentalID:rental._id,
            functional_status:req.body.functional_status
        }},{new:true})

       
        
       const sup = await supervisorSchema.findById(supervisor)
       if(!sup.loocafes.includes(loocafe._id)){
        await supervisorSchema.findByIdAndUpdate(ObjectID(req.body.supervisorID),{
            $push:{
                loocafes:loocafe._id
            }
        })
       }
        
       
        req.files.forEach(async(file,index)=>{
    
            fileUploader(file,cleaner,rental)
               
        })
      
    
        qrcode.toDataURL(
            
    `Loocafe name: ${loocafe.name}
    Loocafe Type: ${loocafe.type}
    Location : ${loocafe.location}
    Coordinates: ${loocafe.coordinates}
    `, 
            
        
            async function (err, url) {
            if(err){
                console.log(err)
            }
            // console.log("qr")
            const all_loocafes = await loocafeSchema.find({}).sort({_id:-1})
                await loocafeSchema.findByIdAndUpdate(loocafe._id,{
                    $set:{
                        id:(all_loocafes.length+1),
                        qr:url
                    }
                })
            
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