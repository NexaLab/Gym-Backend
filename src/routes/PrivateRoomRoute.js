const express = require("express");
const router = express.Router();




const PrivateRoomController = require("../controllers/PrivateRoomController");





router.get("/private-room/key/:clickByUserEmail/:clickOnUserEmail", PrivateRoomController.getPrivateRoomOfUsersByEmail)







module.exports = router;