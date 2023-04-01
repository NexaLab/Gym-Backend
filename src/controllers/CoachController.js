const CoachService = require("../services/CoachService")



module.exports = {



    getAllCoaches: async (req, res, next) => {


        CoachService.getAllCoaches(req, res, next)
    }
}