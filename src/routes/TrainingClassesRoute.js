const express = require("express");
const router = express.Router();




const TrainingClassesController = require("../controllers/TrainingClassesController");







router.post("/training-classes/save", TrainingClassesController.saveTrainingClass);

router.get("/training-classes/all", TrainingClassesController.getAllTrainingClasses);

router.put("/training-classes/update/:trainingClassID", TrainingClassesController.updateTrainingClass);






module.exports = router;