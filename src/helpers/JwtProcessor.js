const jwt = require('jsonwebtoken')
const GenericResponse = require('../dto/GenericResponse')




module.exports = {


    createToken: async (user) => {

        const token = await jwt.sign({user} , process.env.JWT_SECRET_KEY , {
            expiresIn: "200 seconds"
        })
        return token

    },
    verifyToken: async (req,res) => {
        const token = req.body.token
        const userVerification = await jwt.verify(token , process.env.JWT_SECRET_KEY)
        res.send(new GenericResponse("Done" , userVerification))
    }
}

