const { addLoocafe, getAllLoocafes, getSpecificLoocafe } = require("../controllers/loocafe");
const { authorize } = require("../middleware/auth");

const router = require("express").Router();

router.post("/add-loocafe",authorize("Admin"),addLoocafe );
router.get("/get-all-loocafes",authorize("Admin"),getAllLoocafes)
router.get("/get-loocafe/:id",authorize("Admin"),getSpecificLoocafe)


module.exports = router
