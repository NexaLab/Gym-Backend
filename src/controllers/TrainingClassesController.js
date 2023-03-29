const TrainingClassesService = require("../services/TrainingClassesService");






module.exports = {



    saveTrainingClass: async (req, res, next) => {


        
        TrainingClassesService.saveTrainingClass(req, res, next);


    }




}