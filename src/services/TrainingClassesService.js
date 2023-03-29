const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const NotSavedException = require("../exceptions/NotSavedException");






module.exports = {




    saveTrainingClass: async (req, res, next) => {




        const data = req.body


        db.query("INSERT into training_classes SET ? ", data, (error, result) => {





            if (error) {

                next(new NotSavedException("Data not saved successfully", 400));
            }



            else {

                return res.send(new GenericResponse("Training Class saved successfully ", data));
            }



        })

    }



}