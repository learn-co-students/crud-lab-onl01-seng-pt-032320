import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  renderRestaurants = () => { 
    return this.props.restaurants.map(res => <Restaurant key={res.id} delRes={this.props.delRes} restaurant={res} />) 
  }

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;