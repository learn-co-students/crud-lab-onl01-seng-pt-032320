import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  renderRestaurants = () => this.props.restaurants.map((restaurant, idx) => <Restaurant key={idx} restaurant={restaurant} delete={this.props.delete}/>)

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;