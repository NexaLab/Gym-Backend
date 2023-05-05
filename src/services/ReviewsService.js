const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const InternalServerException = require("../exceptions/InternalServerException");


module.exports = {

    getAll: async (req, res, next) => {

        const query = "SELECT r.id, r.rating, r.comment, r.date,cl.first_name, cl.last_name FROM reviews r inner join clients cl on r.client_id = cl.id"


        db.query(query, (error, result) => {



            if (error) {

                next(new InternalServerException("Error from Server side while finding reviews"));
            }




            else {

                return res.send(new GenericResponse("List of All client reviews ", result));
            }



        })


    }
}