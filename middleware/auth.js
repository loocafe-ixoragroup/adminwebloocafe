const UserSchema = require("../models/user");
const jwt = require("jsonwebtoken");

// legacy auth checker

module.exports.checkAuth = async (req, res, next) => {
  try{
    if (req.headers.authorization) {
      
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.JWT_TOKEN, async (err, decoded) => {
        if (err) {
          return res.status(401).json({
            success: false,
            message: "Auth failed4",
            data: null,
          });
        }
        const isValid = await UserSchema.findById(decoded.id);
        if (!isValid) {
          return res.status(401).json({
            success: false,
            message: "Auth failed",
            data: null,
          });
        }
  
        const userDetail = await UserSchema.findById(decoded.id)
        req.user = userDetail;
        // res.status(200).json({
        //   success: true,
        //   message: "details fetched successfully",
        //   data: userDetail,
        // });
    next()
        
      });

    } 

    else {
      return res.status(401).json({
        success: false,
        message: "Auth failed3",
        data: null,
      });
    }

  }catch{
    return res.status(401).json({
      success: false,
      message: "Auth failed",
      data: null,
    });
  }
};


module.exports.authorize = (roles = []) => {
    if (typeof roles === "string") {
      roles = [roles];
    }
  
    return [
      (req, res, next) => {
        try{
          const token = req.headers.authorization.split(" ")[1];
          jwt.verify(token, process.env.JWT_TOKEN, async (err, decoded) => {
            if (roles.length && !roles.includes(decoded.role)) {
              return res.status(401).json({
                success: false,
                message: "Unauthorized",
                data: null,
               });
            }
            if (err) {
              return res.status(401).json({
                success: false,
                message: "Auth failed1",
                data: err,
              });
            }
            const isValid = await UserSchema.findById(decoded.id);
            if (!isValid) {
              return res.status(401).json({
                success: false,
                message: "Auth failed2",
                data: null,
              });
            }
    
            const userDetail = await UserSchema.findById(decoded.id)
            req.user = userDetail;
            next();
          });
        }catch{
            return res.status(401).json({
              success: false,
              message: "Auth failed",
              data: null,
            });
        }
      },
    ];
};

