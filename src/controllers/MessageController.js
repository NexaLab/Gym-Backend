const messageService = require("../services/MessageService")

module.exports = {


    getMessagesOfTwoUsers:  async (req,res, next) => {

        messageService.getMessagesOfTwoUsers(req,res,next)

    }
    
}