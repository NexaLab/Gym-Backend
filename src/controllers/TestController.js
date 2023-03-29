const GenericResponse = require("../dto/GenericResponse");









module.exports = {





    test: async (req, res) => {




        const test = "test"

        res.send(new GenericResponse("Test api", test))



    }








}