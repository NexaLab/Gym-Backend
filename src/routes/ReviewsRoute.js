const express = require ("express")
const router = express.Router()


const reviewController = require ("../controllers/ReviewsController")

router.get("/reviews/getAll" , reviewController.getAllReviews)


module.exports = router 
