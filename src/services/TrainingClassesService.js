const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const NotSavedException = require("../exceptions/NotSavedException");
const NotFoundException = require("../exceptions/NotFoundException");
const InternalServerException = require("../exceptions/InternalServerException");









module.exports = {






    saveTrainingClass: async (req, res, next) => {






        const data = req.body




        db.query("INSERT into training_classes SET ? ", data, (error, result) => {





            if (error) {

                next(new InternalServerException("Error from Server side while saving training class"));
            }





            else {

                return res.send(new GenericResponse("Training Class saved successfully ", data));
            }



        })

    },








    getAllTrainingClasses: async (req, res, next) => {





        const query = "SELECT * FROM training_classes";




        db.query(query, (error, result) => {





            if (error) {

                next(new InternalServerException("Error from Server side while getting all training classes"));
            }





            else {



                

                if (result.length === 0) {


                    next(new NotFoundException("Data is empty"));

                }





                else {


                    return res.send(new GenericResponse("List of all training classes ", result));

                }



            }


        })


    },








    updateTrainingClass: async (req, res, next) => {






        const trainingClassID = req.params.trainingClassID
        const data = req.body






        db.query("SELECT * FROM training_classes where id = ?", trainingClassID, (error, result) => {






            if (error) {



                next(new InternalServerException(
                    "Error from Server side while finding training class by id: " + trainingClassID
                ));


            }







            else {




                

                if (result.length === 0) {


                    next(new NotFoundException("Training Class not found by id: " + trainingClassID));

                }







                else {




                    db.query("UPDATE training_classes SET ? where id = ? ", [data, trainingClassID],

                        (error, result) => {







                            if (error) {



                                next(new InternalServerException(
                                    "Error from Server side while updating training class "
                                ));

                                
                            }






                            else {

                                return res.send(new GenericResponse("Training Class updated successfully ", data));
                            }
                            



                        })

                }
            }


        })


    },











}