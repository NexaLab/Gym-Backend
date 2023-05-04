const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const InternalServerException = require("../exceptions/InternalServerException");


module.exports = {


    getMessagesOfTwoUsers: async (req,res, next) => {

        const email1 = req.params.userEmail1
        const email2 = req.params.userEmail2

        const emails =[email1, email2, email2 , email1]


        db.query("select * from messages msg inner join users u on u.id = msg.user_sender_id where (msg.user_sender_id = (select id from users where email = ?) and msg.user_receiver_id =(select id from users where email = ?)) or (msg.user_sender_id = (select id from users where email = ? ) and msg.user_receiver_id =(select id from users where email = ?)) order by msg.id asc",emails ,(error, result) => {



            if (error) {

                next(new InternalServerException("Error from Server side while finding messages"));
            }




            else {

                return res.send(new GenericResponse("List of Messages between two clients ", result));
            }



        })

        

    }





}