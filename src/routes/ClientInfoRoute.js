const express = require("express");
const router = express.Router();


const ClientInfoController = require('../controllers/ClientInfoController');
const ClientsController = require('../controllers/ClientsController')




router.get("/clients/getAll" , ClientInfoController.getAllClients)
router.get("/client/getAll", ClientsController.getAllClients)


module.exports = router
