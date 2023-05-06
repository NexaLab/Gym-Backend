const express=  require ("express")
const router = express.Router()


const membershipController = require ('../controllers/MembershipController')

router.get('/membership/getAll', membershipController.getAllClientMemberships)



module.exports = router 