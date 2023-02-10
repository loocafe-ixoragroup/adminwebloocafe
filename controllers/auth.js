const userSchema = require("../models/user")
const jwt = require("jsonwebtoken")

module.exports.login = async(req,res)=>{
    try{
        const data = await userSchema.find({username:req.body.username,
        password:req.body.password})
        if(data.length == 0){
            return res.status(401).json({
                success:false,
                message:"Invalid credentials"
            })
        }
        else{
            const token = jwt.sign(
                { id: data[0]._id,
                role: data[0].role },
                process.env.JWT_TOKEN,
                {
                  expiresIn: "10d",
                }
              )
            return res.status(200).json({
                success:true,
                message:"logged in sucessfully",
                token:token
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