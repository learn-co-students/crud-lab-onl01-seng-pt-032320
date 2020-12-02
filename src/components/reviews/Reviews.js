import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    debugger
    const restaurantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviews = restaurantReviews.map((review,index) => {
    return <Review key={index} id={review.id} review={review} deleteReview={this.props.deleteReview}/> 
  })
    return (
      <ul>
      {reviews}
      </ul>
    );
  }
};

export default Reviews;