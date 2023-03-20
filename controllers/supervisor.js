const { DataSync } = require("aws-sdk")
const { ObjectID, ObjectId } = require("bson")
const supervisorSchema = require("../models/supervisor")
const userSchema = require("../models/user")
const {uploadFileToS3} = require("../utils/s3")

module.exports.addSupervisor = async(req,res)=>{
    try{
        const data = new supervisorSchema({
            name:req.body.name,
            username:req.body.username,
            phone:req.body.phone,
            city:req.body.city,
            state:req.body.state,
            alternate_phone:req.body.alternate_phone,
            password:req.body.password
        })
        await data.save()
        let file = req.file
        originalname = (file.originalname).replace(/[&\/\\#, +()$~%'":*?<>{}]/g, '_')   // here replace special char to "_"

            fileName = originalname+"-"+new Date().getTime()/1000

            result = await uploadFileToS3(file, fileName);    //upload file to s3
            data.photo = result.key
            await data.save()
        const user = new userSchema({
            userId:req.body.username,
            password:req.body.password,
            role:"supervisor",
            state:req.body.state,
            city:req.body.city,
            full_name:req.body.name
        })
        await user.save()
        return res.status(200).json({
            success:true,
            message:"supervisor added successfully"
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    }
}
module.exports.getSupervisors = async(req,res)=>{
    try{
       
        const data = await supervisorSchema.find({state:req.body.state,city:req.body.city})
        // console.log(data)
        return res.status(200).json({
            success:true,
            message:"supervisor(s) fetched successfully",
            data:data
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    }
}
module.exports.getAllSupervisors = async(req,res)=>{
    try{
        const data = await supervisorSchema.find({})
        return res.status(200).json({
            success:true,
            message:"all supervisors fetched successfully",
            data:data
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    }
}

module.exports.getLoocafeSupervisor = async(req,res)=>{
    try{
        const data = await supervisorSchema.find({loocafes:{$in:[ObjectID(req.body.loocafeID)]}})

        return res.status(200).json({
            success:true,
            message:"retrieved supervisors according to loocafeID successfully",
            data:data
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    }
}
module.exports.updateSupervisor = async(req,res)=>{
    try{
        await supervisorSchema.findByIdAndUpdate(ObjectId(req.params.id),{
            $set:{
                phone:req.body.phone,
                alternate_phone:req.body.alternate_phone,
                username:req.body.username
            }
        })
        return res.status(200).json({
            success:true,
            message:"supervisor details updated successfully"
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    }
}
module.exports.assignLoocafe = async(req,res)=>{
    try{
        loocafeID = ObjectId(req.body.loocafeID)
        sup = ObjectID(req.params.id)
        const supervisor = await supervisorSchema.findById(sup)
        if(!supervisor.loocafes.includes(loocafeID)){
            await supervisorSchema.findByIdAndUpdate(sup,{
                $push:{
                    loocafes:ObjectId(loocafeID)
                }
            })
        }
        else{
            return res.status(400).json({
                success:false,
                message:"loocafe's already on supervisor's list"
            })
        }  
        
        return res.status(200).json({
            success:true,
            message:"added loocafe to supervisor"
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    }
}
module.exports.unassignLoocafe = async(req,res)=>{
    try{
        loocafeID = ObjectId("63e65bf6833b7b4f6ce2d971")
        await supervisorSchema.findByIdAndUpdate(ObjectId(req.params.id),{
            $pull:{
                loocafes:ObjectId(loocafeID)
            }
        })
        return res.status(200).json({
            success:true,
            message:"removed loocafe"
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    }
}
module.exports.getSpecificSupervisor = async(req,res)=>{
    try{
        const data = await supervisorSchema.findById(ObjectId(req.params.id))
        if(Object.keys(data).length == 0){
            return res.status(400).json({
                success:false,
                message:"supervisor doesn't exist"
            })
        }
        return res.status(200).json({
            success:true,
            message:"retrived supervisor",
            data:data
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    }
}
module.exports.deleteSupervisor = async(req,res)=>{
    try{
        await supervisorSchema.findByIdAndDelete(ObjectId(req.params.id))

        return res.status(200).json({
            success:true,
            message:"supervisor deleted successfully"
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    }
}