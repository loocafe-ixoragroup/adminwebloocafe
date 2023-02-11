const { ObjectID } = require("mongodb")
const loocafeSchema = require("../models/loocafe")
const rentalSchema = require("../models/rental")

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

    try{
        let result = []

        const a = new Promise(async(resolve,reject)=>{
            await loocafeSchema.find({}).then(async(data)=>{
            
                    for(let ele of data){
                        const rental = await rentalSchema.findById(ele.rentalID)
                        
                        result.push({loocafe:ele,monthly_rent:rental.monthly_rent,
                            unit_start_date:rental.unit_start_date})
                        // console.log(ele)
                    }
                    resolve(result)
                    
                })
        
                
        })    
        a.then(data=>{
            return res.status(200).json({
                success:true,
                message:"loocafes retrieved",
                data:data
            })
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+error
        })
    }
   
}