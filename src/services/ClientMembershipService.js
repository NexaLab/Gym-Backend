const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const InternalServerException = require("../exceptions/InternalServerException");


module.exports = {

    getAll: async (req, res, next) => {

        const query = 'SELECT cl.id, cm.client_id,cm.membership_id, cl.first_name, cl.last_name,cl.phone_no,cl.location,cl.user_id,u.email,m.status,cm.start_date,cm.end_date , m.price FROM client_membership cm inner join clients cl on cm.client_id = cl.id inner join users u on cl.user_id = u.id inner join membership m on m.id = cm.membership_id'

        db.query(query, (error, result) => {



            if (error) {

                next(new InternalServerException("Error from Server side while finding client memberships"));
            }




            else {

                return res.send(new GenericResponse("List of All client memberships ", result));
            }



        })


    }
}