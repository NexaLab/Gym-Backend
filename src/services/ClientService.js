const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const InternalServerException = require("../exceptions/InternalServerException");


module.exports = {

    getAllClients:  async (req, res, next) => {



        db.query("select * from clients", (error, result) => {



            if (error) {

                next(new InternalServerException("Error from Server side while finding clients"));
            }




            else {

                return res.send(new GenericResponse("List of All Clients ", result));
            }



        })


    }
}