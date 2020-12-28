import React from 'react'
import Review from './Review'

class Reviews extends React.Component {
  render() {
    const {reviews, restaurantId, deleteReview} = this.props
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview}/>
    })

    return(
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    )
  }
}

export default Reviews