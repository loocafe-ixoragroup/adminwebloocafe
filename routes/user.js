const { addUser, getAllUsers, getUser } = require("../controllers/user");
const { authorize, checkAuth } = require("../middleware/auth");
const multer = require("multer")
const upload = multer({dest:__dirname +"../../uploads"});

const router = require("express").Router();

router.post("/add-user",upload.single("file"),addUser)
router.get("/get-all-users",authorize("Admin"),getAllUsers)
router.get("/get-user",checkAuth,getUser)


module.exports = router
