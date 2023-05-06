// const userRepo = require("../repos/UserRepo");  \
const db = require("../db-connection/DbConnection") 


module.exports = {



    saveUser: async (email, password) => {



        const userData = {
            email,
            password
        }

        const query = "INSERT INTO users SET ? ";


        return new Promise((resolve, reject) => {


            db.query(query, userData, (error, result) => {



                if (error) {

                    console.log(error);

                }


                else {

                    resolve(result);

                }
            })
        })
    },




    getUser(userEmail) {




        const query = "SELECT * from users where email = ?  ";


        return new Promise((resolve, reject) => {


            db.query(query, userEmail, (error, result) => {



                if (error) {

                    console.log(error);

                }


                else {

                    resolve(result);

                }
            })
        })
    }

}