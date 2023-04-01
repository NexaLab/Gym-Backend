const ClientInfoService = require('../services/ClientInfoService')


module.exports = {

    getAllClients: async (req,res, next) => {


        ClientInfoService.getAllClients(req,res,next)

        
    }


}