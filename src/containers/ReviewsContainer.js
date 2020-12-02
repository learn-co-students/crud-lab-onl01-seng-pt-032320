import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {addReview, deleteReview} from '../actions/actions'


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

export default  connect(({reviews}) => ({reviews}), {addReview,deleteReview})(ReviewsContainer);
