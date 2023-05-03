const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const NotFoundException = require("../exceptions/NotFoundException");
const InternalServerException = require("../exceptions/InternalServerException");




module.exports = {



    getPrivateRoomOfUsersByEmail: (req, res, next) => {


        const emails = {
            firstUserEmail: req.params.clickByUserEmail,
            secondUserEmail: req.params.clickOnUserEmail
        }


        db.query(`SELECT room_id from private_rooms pr where (pr.user_1_id = (select u.user_id from user u where u.email= ? ) or pr.user_1_id =(select u.user_id from user u where u.email= ? )) and (pr.user_2_id = (select u.user_id from user u where u.email= ? ) or pr.user_2_id = (select u.user_id from user u where u.email= ? ));`, [emails.firstUserEmail, emails.secondUserEmail, emails.firstUserEmail, emails.secondUserEmail], (error, result, fields) => {


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