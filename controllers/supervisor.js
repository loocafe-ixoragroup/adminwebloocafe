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
            phone:req.body.password,
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

