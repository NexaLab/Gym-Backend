const express = require("express");
const router = express.Router();




const VideosQrController = require("../controllers/VideosQrController");

router.get("/videos/allLinks" , VideosQrController.getAllVideosLink);
router.post("/videos/save", VideosQrController.saveVideosLink)
router.delete("/videos/delete/:videoLinkID", VideosQrController.deleteVideosLinkById);
router.put("/videos/update/:videoLinkID", VideosQrController.updateVideoLink);



module.exports = router;