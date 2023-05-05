const VideosQrService = require("../services/VideosQrService")

module.exports = {


    getAllVideosLink:  async (req,res, next) => {

        VideosQrService.getAllVideosLink(req,res,next)

    }, 

    saveVideosLink: async (req,res, next) => {

        VideosQrService.saveVideosLink(req,res,next)

    }, 
    
    deleteVideosLinkById: async (req, res, next) => {


        VideosQrService.deleteVideosLinkById(req, res, next);
    },

    updateVideoLink: async (req, res, next) => {



        VideosQrService.updateVideoLink(req,res,next)


    },

}