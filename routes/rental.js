const { trackRent } = require("../controllers/rental");
const { authorize } = require("../middleware/auth");

const router = require("express").Router();

router.get("/track-rental",authorize("Admin"),trackRent);


module.exports = router
