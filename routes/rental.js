const { trackRent } = require("../controllers/rental");
const { authorize } = require("../middleware/auth");

const router = require("express").Router();

router.post("/track-rental",authorize("Admin"),trackRent);


module.exports = router
