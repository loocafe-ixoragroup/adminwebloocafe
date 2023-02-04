const { addSupervisor, getSupervisors } = require("../controllers/supervisor");
const { checkAuth } = require("../middleware/auth");

const router = require("express").Router();

router.post("/add-supervisor",checkAuth, addSupervisor)
router.get("/get-supervisor",checkAuth,getSupervisors)

module.exports = router
