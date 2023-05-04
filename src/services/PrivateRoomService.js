const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const NotFoundException = require("../exceptions/NotFoundException");
const InternalServerException = require("../exceptions/InternalServerException");




module.exports = {



    getPrivateRoomOfUsersByEmail: async (req, res, next) => {


        const emails = {
            firstUserEmail: req.params.clickByUserEmail,
            secondUserEmail: req.params.clickOnUserEmail
        }


        db.query(`SELECT pr.id from private_rooms pr where (pr.admin_id = (select ad.id from admin ad inner join users u on ad.user_id = u.id where u.email= ? ) or pr.client_id = (select c.user_id from clients c inner join users u on c.user_id = u.id where u.email= ? )) and (pr.client_id = (select c.user_id from clients c inner join users u on c.user_id = u.id where u.email= ? ) or pr.admin_id = (select ad.id from admin ad inner join users u on ad.user_id = u.id where u.email= ? ));`, [emails.firstUserEmail, emails.firstUserEmail, emails.secondUserEmail, emails.secondUserEmail], (error, result, fields) => {


            if (error) {
                return next(new InternalServerException(error));
            }


            else {


                const privateRoomKey = result;


                if (privateRoomKey.length === 0) {

                    return next(new NotFoundException("Not Found"));
                }
                return res.send(new GenericResponse(`Private room key for these users: `, privateRoomKey));


            }
        });


    }

}