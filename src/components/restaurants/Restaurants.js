import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {
  
  renderRestaurants = () => {this.props.restaurants.map(restaurant =><li><Restaurant {...restaurant} delete={this.props.delete} key={restaurant.id}/></li>)}
  
  
  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;