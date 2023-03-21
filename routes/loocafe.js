const { addLoocafe, getAllLoocafes, getSpecificLoocafe, getLoocafeDetails, 
getFunctionalLoocafes, getAllKycDetails, getUnitNo, trackLoocafe,
modifyFunctionalStatus, 
loocafesBySupervisorId,
searchLoocafeName} = require("../controllers/loocafe");
const { authorize } = require("../middleware/auth");

const router = require("express").Router();

router.post("/add-loocafe",authorize("Admin"),addLoocafe );
router.get("/get-all-loocafes",authorize("Admin"),getAllLoocafes)
router.get("/get-loocafe/:id",authorize("Admin"),getSpecificLoocafe)
router.get("/get-loocafe-details",authorize("Admin"),getLoocafeDetails)
router.post("/get-functional-loocafe",authorize("Admin"),getFunctionalLoocafes)
router.get("/get-kyc-details/:id",authorize("Admin"),getAllKycDetails)

router.post("/get-unit-no",authorize("Admin"),getUnitNo)
router.post("/track-loocafe",authorize("Admin"),trackLoocafe)
router.put("/modify-functional-status/:id",authorize("Admin"),modifyFunctionalStatus)
router.post("/loocafe-from-supervisor", authorize("Admin"), loocafesBySupervisorId)
router.post("/search-loocafe",authorize("Admin"),searchLoocafeName)

module.exports = router
