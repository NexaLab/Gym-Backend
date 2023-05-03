const clientService = require('../services/ClientService')


module.exports = {


    getAllClients: async (req,res, next) => {

        clientService.getAllClients(req,res,next)

    }
}
