const authService = require ('../services/AuthService')


module.exports = {


    signup : async (req,res,next) => {

        authService.signUp(req,res,next);

    }


}