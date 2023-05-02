const db = require("../db-connection/DbConnection");
const GenericResponse = require("../dto/GenericResponse");
const NotSavedException = require("../exceptions/NotSavedException");
const NotFoundException = require("../exceptions/NotFoundException");
const InternalServerException = require("../exceptions/InternalServerException");
const TrainingClassDto = require("../dto/TrainingClassesDto");
const CoachService = require("../services/CoachService");







module.exports = {






    saveTrainingClass: async (req, res, next) => {






        const data = req.body

        const scheduleData = {

            class: data.class,
            start_date: data.startDate,
            end_date: data.endDate,
            coach_id: data.coachID
        }


        db.query("INSERT into schedule SET ? ", scheduleData, (error, result) => {





            if (error) {

                next(new InternalServerException("Error from Server side while saving training class"));
            }





            else {

                return res.send(new GenericResponse("Training Class saved successfully ", data));
            }



        })

    },








    getAllTrainingClasses: async (req, res, next) => {





        const query = "select sc.id, sc.class, sc.start_date, sc.end_date, sc.coach_id, c.first_name, c.last_name, c.email, c.salary from schedule sc inner join coach c on sc.coach_id = c.id ";




        db.query(query, (error, result) => {





            if (error) {

                next(new InternalServerException("Error from Server side while getting all training classes"));
            }





            else {





                if (result.length === 0) {


                    next(new NotFoundException("Data is empty"));

                }





                else {




                    const trainingClasses = []



                    for (let index = 0; index < result.length; index++) {




                        trainingClasses.push(new TrainingClassDto(

                            result[index].id,
                            result[index].class,
                            result[index].start_date,
                            result[index].end_date,
                            result[index].coach_id,
                            result[index].first_name,
                            result[index].last_name,
                            result[index].email,
                            result[index].salary

                        ))



                    }


                    return res.send(new GenericResponse("List of all training classes ", trainingClasses));

                }



            }


        })


    },








    updateTrainingClass: async (req, res, next) => {






        const scheduleID = req.params.scheduleID
        const data = req.body



        db.query("SELECT * FROM schedule where id = ? ", scheduleID, async (error, result) => {






            if (error) {



                next(new InternalServerException(
                    "Error from Server side while finding training class by id: " + scheduleID
                ));


            }







            else {






                if (result.length === 0) {


                    next(new NotFoundException("Training Class not found by id: " + scheduleID));

                }







                else {


                    // const coach =  await CoachService.getCoachById(req , res, next);


                    const scheduleData = {

                        class: data.class,
                        start_date: data.startDate,
                        end_date: data.endDate,
                        coach_id: data.coachID
                    }


                    db.query("UPDATE schedule SET ? where id = ? ", [scheduleData, scheduleID],

                        (error, result) => {







                            if (error) {



                                next(new InternalServerException(
                                    "Error from Server side while updating training class "
                                ));


                            }






                            else {

                                return res.send(new GenericResponse("Training Class updated successfully ", scheduleData));
                            }




                        })

                }
            }


        })


    },







    deleteScheduleById: async (req, res, next) => {






        const scheduleID = req.params.scheduleID


        db.query("DELETE FROM schedule where id = ? ", scheduleID , (error, result) => {







            if (error) {



                next(new InternalServerException(
                    "Error from Server side while deleting schedule by ID " + scheduleID
                ));


            }






            else {

                return res.send(new GenericResponse("Deleted schedule successfully by id: " + scheduleID, null));
            }




        })


    }











}