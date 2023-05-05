const clientMembershipService = require ('../services/ClientMembershipService')



module.exports = {

    getAllClientMemberships : async (req,res,next) => {

        clientMembershipService.getAll(req,res,next)

    }

}