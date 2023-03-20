const { addSupervisor, getSupervisors, getAllSupervisors, getLoocafeSupervisor,
updateSupervisor, 
assignLoocafe,
unassignLoocafe,
getSpecificSupervisor,
deleteSupervisor} = require("../controllers/supervisor");
const { authorize } = require("../middleware/auth");

const multer = require("multer")
const upload = multer({dest:__dirname +"../../uploads"});

const router = require("express").Router();

router.post("/add-supervisor",authorize("Admin"),upload.single("file"), addSupervisor)
router.post("/get-supervisor",authorize("Admin"),getSupervisors)
router.get("/get-all-supervisors",authorize("Admin"),getAllSupervisors)
router.post("/get-loocafe-supervisor",authorize("Admin"),getLoocafeSupervisor)

router.put("/update-supervisor/:id",authorize("Admin"),updateSupervisor)
router.post("/assign-loocafe/:id",authorize("Admin"),assignLoocafe)
router.post("/unassign-loocafe/:id",authorize("Admin"),unassignLoocafe)
router.get("/get-specific-supervisor/:id",authorize("Admin"),getSpecificSupervisor)
router.delete("/delete-supervisor/:id",authorize("Admin"),deleteSupervisor)
module.exports = router
