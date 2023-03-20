const { addKyc, updateKyc} = require("../controllers/kyc");
const { authorize } = require("../middleware/auth");
const multer = require("multer")
const upload = multer({dest:__dirname +"../../uploads"});

const router = require("express").Router();

router.post("/add-kyc",authorize("Admin"),upload.any("file"), addKyc)
router.put("/update-kyc/:id",authorize("Admin"),upload.any("file"),updateKyc)

module.exports = router
