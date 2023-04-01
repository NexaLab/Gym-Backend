const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const NotSavedException = require("../exceptions/NotSavedException");
const NotFoundException = require("../exceptions/NotFoundException");
const InternalServerException = require("../exceptions/InternalServerException");
const ClientDto = require("../dto/ClientDto")


module.exports = {


    getAllClients: async (req , res , next) => {

        const query = "SELECT c.id , c.first_name , c.last_name , c.email , c.phone_no , c.address , sc.Class from client c INNER JOIN schedule sc on c.id = sc.client_id ";

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
                            result[index].phone_no,
                            result[index].Class,
                            result[index].address,
                            

                        ))



                    }


                    return res.send(new GenericResponse("List of all clients ", clients));

                }



            }


        })


    }
}