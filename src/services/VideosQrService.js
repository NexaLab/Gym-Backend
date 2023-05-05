const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const InternalServerException = require("../exceptions/InternalServerException");



module.exports = {

    getAllVideosLink: async (req, res, next) => {



        db.query("select * from videos_qr ", (error, result) => {



            if (error) {

                next(new InternalServerException("Error from Server side while finding videos link"));
            }




            else {

                return res.send(new GenericResponse("List of All Videos Link ", result));
            }



        })


    },
    saveVideosLink: async (req, res, next) => {

        const data = req.body

        const vidoesLinkData = {

            name: data.name,
            link: data.link
        }






        db.query("INSERT into videos_qr SET ? ", vidoesLinkData, (error, result) => {



            if (error) {

                next(new InternalServerException("Error from Server side while saving videos link"));
            }




            else {

                return res.send(new GenericResponse("Videos Link saved successfully ", data));
            }



        })


    },

    deleteVideosLinkById: async (req, res, next) => {






        const videoLinkID = req.params.videoLinkID


        db.query("DELETE FROM videos_qr where id = ? ", videoLinkID , (error, result) => {







            if (error) {



                next(new InternalServerException(
                    "Error from Server side while deleting videos link by ID " + videoLinkID
                ));


            }






            else {

                return res.send(new GenericResponse("Deleted vidoes link successfully by id: " + videoLinkID, null));
            }




        })


    },
    
    updateVideoLink: async (req, res, next) => {






        const videoLinkID = req.params.videoLinkID
        const data = req.body



        db.query("SELECT * FROM videos_qr where id = ? ", videoLinkID, async (error, result) => {






            if (error) {



                next(new InternalServerException(
                    "Error from Server side while finding video link by id: " + videoLinkID
                ));


            }







            else {






                if (result.length === 0) {


                    next(new NotFoundException("Video Link not found by id: " + videoLinkID));

                }







                else {




                    const videosLinkData = {

                        name: data.name,
                        link: data.link
                    }


                    db.query("UPDATE videos_qr SET ? where id = ? ", [videosLinkData, videoLinkID],

                        (error, result) => {







                            if (error) {



                                next(new InternalServerException(
                                    "Error from Server side while updating video link "
                                ));


                            }






                            else {

                                return res.send(new GenericResponse("Video Link updated successfully ", videosLinkData));
                            }




                        })

                }
            }


        })


    }

}