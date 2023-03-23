const userSchema = require("../models/user")
const cleanerSchema = require("../models/cleaner")
const supervisorSchema = require("../models/supervisor")
const {uploadFileToS3} = require("../utils/s3")

module.exports.addUser = async(req,res)=>{
    try{
        const data = await userSchema.find({email:req.body.email})
        if(data.length == 0){

        const user = new userSchema({
            userId: req.body.userID,
            full_name:req.body.fullname,
            email:req.body.email,
            phone:req.body.phone,
            state:req.body.state,
            city:req.body.city,
            dob:req.body.dob,
            gender:req.body.gender,
            disability:req.body.disability
        })
        await user.save()
        let file = req.file
        originalname = (file.originalname).replace(/[&\/\\#, +()$~%'":*?<>{}]/g, '_')   // here replace special char to "_"

            fileName = originalname+"-"+new Date().getTime()/1000

            result = await uploadFileToS3(file, fileName);    //upload file to s3
            user.profile = result.key
            await user.save()

        return res.status(200).json({
            success:true,
            message:"user added successfully"
        })
    }
    else{
        return res.status(409).json({
            success:true,
            message:"email ID exists"
        })
    }
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    } 
}
module.exports.getAllUsers = async(req,res)=>{
    
    await userSchema.find({city:req.body.city,state:req.body.state}).then(data=>{
        return res.status(200).json({
            success:true,
            message:"users fetched successfully",
            data:data
        })
    }).catch(error=>{
        return res.status(500).json({
            success:false,
            message:"Internal server error "+error
        })
    })
}
module.exports.getUser = async(req,res)=>{
    try{
    let data;
    if(req.user.role == "supervisor"){
        console.log(req.user.role, req.user._id)

        data = await supervisorSchema.findById(req.user.schemaId)
    }
    else if(req.user.role == "cleaner"){
        data = await cleanerSchema.findById(req.user.schemaId)
    }
    else{
        data = await userSchema.findById(req.user._id)
    }

    
        return res.status(200).json({
            success:true,
            message:"user fetched successfully",
            data:data
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+error
        })
    }
}