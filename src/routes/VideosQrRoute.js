const express = require("express");
const router = express.Router();




const VideosQrController = require("../controllers/VideosQrController");

router.get("/videos/allLinks" , VideosQrController.getAllVideosLink);
router.post("/videos/save", VideosQrController.saveVideosLink)



module.exports = router;