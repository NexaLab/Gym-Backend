const express = require("express");
const router = express.Router();




const CoachController = require("../controllers/CoachController");





router.get("/coach/all" , CoachController.getAllCoaches);








module.exports = router;