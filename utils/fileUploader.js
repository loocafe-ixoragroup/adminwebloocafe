const fs = require("fs")
const { uploadFileToS3} = require("./s3");
const cleanerSchema = require("../models/cleaner")
const rentalSchema = require("../models/rental")

module.exports.fileUploader = async(file,cleaner,rental)=>{
    
            originalname = (file.originalname).replace(/[&\/\\#, +()$~%'":*?<>{}]/g, '_')   // here replace special char to "_"

            fileName = originalname+"-"+new Date().getTime()/1000

            result = await uploadFileToS3(file, fileName);    //upload file to s3
            console.log(result.key);
            // let rental_images = []

            if(file.fieldname == "electricity_bill"){
                await cleanerSchema.findByIdAndUpdate(cleaner._id,{
                    $set:{
                        electricity_bill : result.key
                    }
                })
               
                
            }
            else if(file.fieldname == "cleaner_pan"){
                await cleanerSchema.findByIdAndUpdate(cleaner._id,{
                    $set:{
                        pan : result.key
                    }
                })
                
                
            }
            else if(file.fieldname == "cleaner_aadhar"){
                await cleanerSchema.findByIdAndUpdate(cleaner._id,{
                    $set:{
                        aadhar : result.key
                    }
                })
                
            }
            else if(file.fieldname == "cleaner_photo"){
                await cleanerSchema.findByIdAndUpdate(cleaner._id,{
                    $set:{
                       photo : result.key
                    }
                })
                
            }
            
            else if(file.fieldname == "rental_agreement"){
                await rentalSchema.findByIdAndUpdate(rental._id,{
                    $set:{
                        agreement_file : result.key
                    }
                })
                
            }
            else if(file.fieldname == "rental_photo"){
                await rentalSchema.findByIdAndUpdate(rental._id,{
                    $push:{
                        images : result.key
                    }
                })
            }
           
            fs.unlink(file.path,(err => {
                if (err) console.log(err);
                else {
                  console.log("Deleted file after uploading at"+file.path);
                  
              
                }}
              ))
}