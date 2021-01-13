import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  filterReviews = () => { return this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurant.id)}

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addRev={this.props.addRev} />
        <Reviews delRev={this.props.delRev} reviews={this.filterReviews()} />
      </div>
    )
  }
}

const mapStateToProps = state => { return {reviews: state.reviews} }

const mapDispatchToProps = dispatch => ({ 
  addRev: review => dispatch({ type: 'ADD_REVIEW', review }),
  delRev: id => dispatch({ type: 'DELETE_REVIEW', id }) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);