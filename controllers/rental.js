const rentalSchema = require("../models/rental")
const loocafeSchema = require("../models/loocafe")

module.exports.trackRent = async(req,res)=>{
    
    try{
        const data = await rentalSchema.find({state:req.body.state,city:req.body.city})
        let arr=[]
        data.forEach(ele=>{
            if(ele.unit_start_date < req.body.from_date){
                let d = new Date(ele.unit_start_date).getTime() + (1000*60*60*24*30)
                d = new Date(d)
                // console.log(d,new Date(req.body.to_date))

                
                if(d <= new Date(req.body.to_date)){
                    arr.push(ele)
                }
            }
            // console.log(arr)
        })
        console.log(arr)
        return res.status(200).json({
            success:true,
            message:"rental data retrieved successfully",
            data:arr
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Internal server error "+err
        })
    } 
}
module.exports.updateRentalStatus = async(req,res)=>{
    
    try{
        await rentalSchema.find({}).then(data=>{
            data.forEach(async(ele)=>{
                let d = new Date(ele.unit_start_date).getTime() + (1000*60*60*24*30)
                d = new Date(d)

                console.log(d)
                const mydate = new Date()
                if(d > mydate && ele.rental_collection == "Pending"){
                    console.log("-->",d)
                    await rentalSchema.findByIdAndUpdate(ele._id,{
                        $set:{
                            rental_collection:"Overdue"
                        }
                    })
                }
                else if((d.getDate() == mydate.getDate() && d.getMonth() == mydate.getMonth() && d.getFullYear() == mydate.getFullYear()) && ele.rental_collection == "Completed"){
                    await rentalSchema.findByIdAndUpdate(ele._id,{
                        $set:{
                            rental_collection:"Pending"
                        }
                    })
                }
            })
        })
    }
    catch(err){
        console.log(err)
    } 
}
