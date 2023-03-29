const mysql = require("mysql");





const mySqlConnnection = mysql.createConnection({


    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_PORT,
    user: process.env.MYSQL_DB_USERNAME,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_DATABASE,
    charset: "utf8mb4"



});






mySqlConnnection.connect((err) => {




    if (err) {
        console.log(err);
    }



    else {
        console.log("MySQL Database connected");
    }


})




module.exports = mySqlConnnection;