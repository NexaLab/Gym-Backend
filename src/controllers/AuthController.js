const authService = require ('../services/AuthService')


module.exports = {


    signup : async (req,res,next) => {

        authService.signUp(req,res,next);

    },

    login : async (req,res,next) =>{


        authService.login(req,res,next);

    }


}