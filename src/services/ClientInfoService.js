const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const NotSavedException = require("../exceptions/NotSavedException");
const NotFoundException = require("../exceptions/NotFoundException");
const InternalServerException = require("../exceptions/InternalServerException");
const ClientDto = require("../dto/ClientDto")


module.exports = {


    getAllClients: async (req , res , next) => {

        const query = "SELECT * FROM client";

        db.query(query, (error, result) => {





            if (error) {

                next(new InternalServerException("Error from Server side while getting all clients info"));
            }





            else {



                

                if (result.length === 0) {


                    next(new NotFoundException("Data is empty"));

                }





                else {




                    const clients = []



                    for (let index = 0; index < result.length; index++) {





                        clients.push(new ClientDto(

                            result[index].id,
                            result[index].first_name,
                            result[index].last_name,
                            result[index].email,
                            result[index].gender,
                            result[index].address,

                        ))



                    }


                    return res.send(new GenericResponse("List of all clients ", clients));

                }



            }


        })


    }
}