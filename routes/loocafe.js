const { addLoocafe, getAllLoocafes, getSpecificLoocafe, getLoocafeDetails, getFunctionalLoocafes, getAllKycDetails } = require("../controllers/loocafe");
const { authorize } = require("../middleware/auth");

const router = require("express").Router();

router.post("/add-loocafe",authorize("Admin"),addLoocafe );
router.get("/get-all-loocafes",authorize("Admin"),getAllLoocafes)
router.get("/get-loocafe/:id",authorize("Admin"),getSpecificLoocafe)
router.get("/get-loocafe-details",authorize("Admin"),getLoocafeDetails)
router.get("/get-functional-loocafe",authorize("Admin"),getFunctionalLoocafes)
router.get("/get-kyc-details/:id",authorize("Admin"),getAllKycDetails)


module.exports = router
