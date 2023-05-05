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


    }

}