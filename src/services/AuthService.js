const userService = require("../services/UserService");
const adminService =  require ("../services/AdminService")
const bcrypt = require("bcryptjs");
const BadRequestException = require("../exceptions/BadRequestException");
const GenericResponse = require("../dto/GenericResponse");
const NotSavedException = require("../exceptions/NotSavedException")





module.exports = {



    signUp: async (req, res, next) => {


        if (
            req.body.email == null ||
            req.body.email.length == 0 ||
            req.body.password == null ||
            req.body.password.length == 0
        ) {


            next(new BadRequestException("Email or Password can't be null or empty"));

        }


        else {



            const isUserExist = await userService.getUser(req.body.email);


            if (isUserExist.length != 0) {
                next(new BadRequestException("User already exists with this email"));
            }


            else {


                req.body.password = await bcrypt.hash(req.body.password, 10);
                const isUserSaved = await userService.saveUser(req.body.email, req.body.password);
                const isAdminSaved = await adminService.addAdmin(isUserSaved.insertId,req.body.firstName,req.body.lastName)

                if (isUserSaved.length != 0 && isAdminSaved.length !=0) {
                    return res.send(new GenericResponse("User has been signed up successfully", null));
                }

                else{
                    next(new NotSavedException("Could Not Save User"));

                }


            }

        }
    }
}