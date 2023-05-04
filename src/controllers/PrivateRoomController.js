const PrivateRoomService = require("../services/PrivateRoomService");



module.exports = {



    getPrivateRoomOfUsersByEmail: async (req, res, next) => {


        PrivateRoomService.getPrivateRoomOfUsersByEmail(req, res, next);
    }
}