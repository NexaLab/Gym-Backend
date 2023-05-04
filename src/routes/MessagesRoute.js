const express = require("express");
const router = express.Router();


const MessagesController = require("../controllers/MessageController")

router.get("/messages/get/:userEmail1/:userEmail2" , MessagesController.getMessagesOfTwoUsers)


module.exports = router;