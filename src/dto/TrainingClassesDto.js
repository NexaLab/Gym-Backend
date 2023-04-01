

class TrainingClassDto {



    id;
    trainingClass;
    startDate;
    endDate;
    coachID;
    firstName;
    lastName;
    email;
    salary;





    constructor(id, trainingClass, startDate, endDate, coachID, firstName, lastName, email, salary) {

        this.id = id;
        this.trainingClass = trainingClass;
        this.startDate = startDate;
        this.endDate = endDate;
        this.coachID = coachID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.salary = salary;

    }


}



module.exports = TrainingClassDto;