const TrainingClassesService = require("../services/TrainingClassesService");






module.exports = {





    saveTrainingClass: async (req, res, next) => {



        TrainingClassesService.saveTrainingClass(req, res, next);


    },






    getAllTrainingClasses: async (req, res, next) => {


        TrainingClassesService.getAllTrainingClasses(req, res, next);


    },



    updateTrainingClass: async (req, res, next) => {



        TrainingClassesService.updateTrainingClass(req, res, next);


    }




}