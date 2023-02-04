const S3=require('aws-sdk/clients/s3');
const fs=require('fs');
const path = require('path');
const bucket=process.env.AWS_BUCKET;
const s3=new S3({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  region:process.env.AWS_REGION
});


const uploadFileToS3=(file,key)=>{
  let fileStream
  if(file.path!==undefined) fileStream=fs.createReadStream(file.path);
  try {
    const params={
    Bucket:bucket,
    Key:`${key}${path.parse(file.originalname).ext}`,
    Body:file.buffer===undefined ? fileStream : file.buffer,
  };
  return s3.upload(params).promise();
  } catch (error) {
    console.log(error);
    return Error(error);
  }
  
}


const delFile = async (fileKey) => {
  try{
    const delParams = {
        Key: fileKey,
        Bucket: bucket
    }
    let flag = await s3.deleteObject(delParams,(err,data)=>{
        if(err){
            console.log(err,err.stack);
            return false;
        }
        else{
            return true;
        }
    }).promise();
    return flag;
  }
  catch(err){
    console.log(err);
  }
}

const getFileStream = (fileKey) =>{
    const downloadParams = {
    Key: fileKey,
    Bucket: bucket
  }

  return s3.getObject(downloadParams).createReadStream()
}




module.exports={
  uploadFileToS3,
  delFile,
  getFileStream,
  
}

