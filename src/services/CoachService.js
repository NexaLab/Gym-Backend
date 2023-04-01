const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const InternalServerException = require("../exceptions/InternalServerException");





module.exports = {



    getCoachById: (req, res, next) => {




        const coachID = req.body.coachID





        return new Promise((resolve, reject) => {





            db.query("select * from coach where id = ? ", coachID, (error, result) => {





                if (error) {

                    next(new InternalServerException("Error from Server side while finding coach with id: " + coachID));
                }





                else {

                    return resolve(result);
                }



            })


        })

    },







    getAllCoaches: async (req, res, next) => {






        db.query("select * from coach ", (error, result) => {





            if (error) {

                next(new InternalServerException("Error from Server side while finding coach"));
            }





            else {

                return res.send(new GenericResponse("List of All Coaches ", result));
            }



        })


    },

}


