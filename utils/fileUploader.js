const fs = require("fs")
const { uploadFileToS3} = require("./s3");

module.exports.fileUploader = async(file,cleaner,rental)=>{
    
            originalname = (file.originalname).replace(/[&\/\\#, +()$~%'":*?<>{}]/g, '_')   // here replace special char to "_"

            fileName = originalname+"-"+new Date().getTime()/1000

            result = await uploadFileToS3(file, fileName);    //upload file to s3
            console.log(result.key);
            let rental_images = []

            if(file.fieldname == "address_proof"){
                cleaner.address_proof = result.key
                await cleaner.save()
                
            }
            else if(file.fieldname == "cleaner_pan"){
                cleaner.pan = result.key
                await cleaner.save()
                
            }
            else if(file.fieldname == "cleaner_aadhar"){
                cleaner.aadhar = result.key
                await cleaner.save()
            }
            else if(file.fieldname == "cleaner_photo"){
                cleaner.photo = result.key
                await cleaner.save()
            }
            
            else if(file.fieldname == "rental_agreement"){
                rental.agreement_file = result.key
                await rental.save()
            }
            else if(file.fieldname == "rental_photo"){
                rental_images.push(result.key)
            }
           
            fs.unlink(file.path,(err => {
                if (err) console.log(err);
                else {
                  console.log("Deleted file after uploading at"+file.path);
                  
              
                }}
              ))
            //   console.log("we get ",rental_images)
              return rental_images
}