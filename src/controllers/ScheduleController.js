const ScheduleService = require("../services/ScheduleService");






module.exports = {





    saveTrainingClass: async (req, res, next) => {



        ScheduleService.saveTrainingClass(req, res, next);


    },






    getAllTrainingClasses: async (req, res, next) => {


        ScheduleService.getAllTrainingClasses(req, res, next);


    },



    updateTrainingClass: async (req, res, next) => {



        ScheduleService.updateTrainingClass(req, res, next);


    }




}