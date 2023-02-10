const { addSupervisor, getSupervisors } = require("../controllers/supervisor");
const { authorize } = require("../middleware/auth");

const router = require("express").Router();

router.post("/add-supervisor",authorize("Admin"), addSupervisor)
router.get("/get-supervisor",authorize("Admin"),getSupervisors)

module.exports = router
