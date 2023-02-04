const supervisorSchema = require("../models/supervisor")

module.exports.addSupervisor = async(req,res)=>{
    try{
        const data = new supervisorSchema({
            name:req.body.name,
            username:req.body.username,
            phone:req.body.phone
        })
        await data.save()
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
        const data = await supervisorSchema.find({})
        console.log(data)
        return res.status(200).json({
            success:true,
            message:"supervisor added successfully",
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

