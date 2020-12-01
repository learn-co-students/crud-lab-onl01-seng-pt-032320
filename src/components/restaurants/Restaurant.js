import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.name}
          <button onClick={() => this.props.deleteRestaurant(this.props.restaurant.id)}> X </button>
          {/* <ReviewsContainer restaurant={restaurant}/> */}
        </li>
      </div>
    );
  }
};

export default Restaurant;
