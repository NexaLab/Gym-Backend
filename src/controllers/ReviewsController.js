const reviewsService = require ("../services/ReviewsService")


module.exports = {

    getAllReviews : async (req,res,next)=>{

        reviewsService.getAll(req,res,next)

    }

}