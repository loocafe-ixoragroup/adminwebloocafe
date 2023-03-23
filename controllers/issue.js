const loocafeSchema = require("../models/loocafe")
const issueSchema = require("../models/issue")
const {ObjectId} = require("bson")

module.exports.addIssue = async(req,res)=>{
    try{
        const loocafeID = ObjectId(req.body.loocafeID)
        
        const loocafe = await loocafeSchema.findById(loocafeID)

        const data = new issueSchema({
            loocafeId:loocafe._id,
            loocafeName:loocafe.name,
            loocafeUnitNo:loocafe.id,
            supervisorId:loocafe.supervisorID,
            description:req.body.description
        })
        await data.save()
        return res.status(200).json({
            success:true,
            message:"issue added successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error, "+error
        })
    }
}
module.exports.getAllIssues = async(req,res)=>{
    try{
        const data = await issueSchema.find({})
        return res.status(200).json({
            success:true,
            message:"issues fetched successfully",
            data:data
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error, "+error
        })
    }
}
module.exports.getIssuesAccordingToSupervisor = async(req,res)=>{
    try{
        const data = await issueSchema.find({supervisorId:req.user.schemaId})
        return res.status(200).json({
            success:true,
            message:"issues fetched successfully",
            data:data
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error, "+error
        })
    }
}