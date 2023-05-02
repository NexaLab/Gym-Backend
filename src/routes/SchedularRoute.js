const express = require("express");
const router = express.Router();




const ScheduleController = require("../controllers/ScheduleController");







router.post("/training-classes/save", ScheduleController.saveTrainingClass);

router.get("/training-classes/all", ScheduleController.getAllTrainingClasses);

router.put("/training-classes/update/:scheduleID", ScheduleController.updateTrainingClass);

router.delete("/training-classes/delete/:scheduleID", ScheduleController.deleteScheduleById);





module.exports = router;