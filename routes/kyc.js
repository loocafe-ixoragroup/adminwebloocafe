const { addKyc } = require("../controllers/kyc");
const { authorize } = require("../middleware/auth");
const multer = require("multer")
const upload = multer({dest:__dirname +"../../uploads"});

const router = require("express").Router();

router.post("/add-kyc",authorize("Admin"),upload.any("file"), addKyc)


module.exports = router
