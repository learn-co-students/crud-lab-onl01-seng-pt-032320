import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    const { reviews, restaurantId, deleteReview } = this.props
    //have to grab only reviews for this restaurant otherwise it displays all reviews for each restaurant
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId )
    
    return (
      <ul>
        {restaurantReviews.map(review => <Review key={review.id} review={review} deleteReview={deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;