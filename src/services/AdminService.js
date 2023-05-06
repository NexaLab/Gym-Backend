const db = require("../db-connection/DbConnection")


module.exports = {

    addAdmin : (userId, firstName, lastName) => {

        const query = "INSERT INTO admin SET ? "


        const adminData = {
            user_id : userId,
            first_name : firstName,
            last_name : lastName
        }

        return new Promise((resolve, reject) => {

            db.query(query, adminData, (error, result) => {

                if (error) {

                    console.log(error);

                }
                else {

                    resolve(adminData);

                }
            })
        })

    }

}