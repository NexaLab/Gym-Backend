const express = require("express");
const router = express.Router();




const TrainingClassesController = require("../controllers/TrainingClassesController");





router.post("/training-classes/save", TrainingClassesController.saveTrainingClass);







module.exports = router;