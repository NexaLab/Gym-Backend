



class ReviewResponse {



    message;
    data;
    numberOfReviews;
    averageRating;





    constructor(message, data) {
        this.message = message;
        this.data = data;
        this.numberOfReviews = data.length
        var avg=0
        data.map(review=>{
            avg = avg + review.rating
        })
        this.averageRating = (avg/data.length)
    }





}


module.exports = ReviewResponse;