const { addSupervisor, getSupervisors } = require("../controllers/supervisor");
const { authorize } = require("../middleware/auth");

const multer = require("multer")
const upload = multer({dest:__dirname +"../../uploads"});

const router = require("express").Router();

router.post("/add-supervisor",authorize("Admin"),upload.single("file"), addSupervisor)
router.post("/get-supervisor",authorize("Admin"),getSupervisors)

module.exports = router
