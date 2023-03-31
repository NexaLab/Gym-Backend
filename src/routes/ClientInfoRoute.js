const express = require("express");
const router = express.Router();


const ClientInfoController = require('../controllers/ClientInfoController');




router.get("/clients/getAll" , ClientInfoController.getAllClients)


module.exports = router
