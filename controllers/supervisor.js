const supervisorSchema = require("../models/supervisor")
const userSchema = require("../models/user")

module.exports.addSupervisor = async(req,res)=>{
    try{
        const data = new supervisorSchema({
            name:req.body.name,
            username:req.body.username,
            phone:req.body.phone,
            city:req.body.city,
            state:req.body.state
        })
        await data.save()
        const user = new userSchema({
            userId:req.body.username,
            phone:req.body.phone,
            role:"supervisor"
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

