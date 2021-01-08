import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, deleteReview, restaurantId } = this.props;
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId);
    return (
      <ul>
        {restaurantReviews.map((review) => <Review key={review.id} review={review} deleteReview={deleteReview}/>)}
      </ul>
    );
  }
};

export default Reviews;