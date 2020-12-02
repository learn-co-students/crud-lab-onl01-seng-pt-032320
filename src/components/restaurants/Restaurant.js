import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    return (
      <div>
        <li>
         <span>{this.props.restaurant.text}</span> 
          <button onClick={() => this.handleOnClick()}> X </button>
          <ReviewsContainer restaurant={this.props.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
