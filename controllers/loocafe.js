const { ObjectID } = require("mongodb")
const loocafeSchema = require("../models/loocafe")

module.exports.addLoocafe = async(req,res)=>{
    try{
    const data = new loocafeSchema({
        name:req.body.name,
        city:req.body.city,
        coordinates:{
            longitude:req.body.longitude,
            latitude:req.body.latitude
        },
        address:req.body.address
    })
    await data.save()
    return res.status(200).json({
        success:true,
        message:"loocafe added successfully"
    })
}
catch(error){
    return res.status(500).json({
        success:false,
        message:"Internal server error "+error,
        data:null
    })
}
}
module.exports.getAllLoocafes = async(req,res)=>{

    await loocafeSchema.find({}).then(data=>{
        return res.status(200).json({
            success:true,
            message:"all loocafes retrieved successfully",
            data:data
        })
    }).catch(err=>{
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    })
}
module.exports.getSpecificLoocafe = async(req,res)=>{

    await loocafeSchema.findById(ObjectID(req.params.id)).then(data=>{
        return res.status(200).json({
            success:true,
            message:"loocafe retrieved successfully",
            data:data
        })
    }).catch(err=>{
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })

    })
}
module.exports.getLoocafeDetails = async(req,res)=>{

    let result = []
    await loocafeSchema.find({}).then((data)=>{
        data.forEach(async(ele)=>{
            const rental = await rentalSchema.findById(ele.rentalID)
            result.push(ele)
            result.push(rental.monthly_rent, rental.unit_start_date)

        })
        return res.status(200).json({
            success:true,
            message:"all loocafe data retrieved",
            data:result
        })
    }).catch(error=>{
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    })
    
}