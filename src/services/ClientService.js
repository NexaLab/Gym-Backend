const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const InternalServerException = require("../exceptions/InternalServerException");


module.exports = {

    getAllClients: async (req, res, next) => {



        db.query("select * from clients c inner join users u on c.user_id = u.id", (error, result) => {



            if (error) {

                next(new InternalServerException("Error from Server side while finding clients"));
            }




            else {

                return res.send(new GenericResponse("List of All Clients ", result));
            }



        })


    }
}