const { getAllIssues, getIssuesAccordingToSupervisor, addIssue } = require("../controllers/issue");
const {authorize, checkAuth} = require("../middleware/auth")

const router = require("express").Router();

router.get("/all-issues",authorize("Admin"),getAllIssues)
router.get("/issues",checkAuth,getIssuesAccordingToSupervisor)
router.post("/add-issue",checkAuth,addIssue)


module.exports = router
