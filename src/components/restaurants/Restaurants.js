import React, { Component } from 'react';
import Restaurant from './Restaurant'
import {deleteRestaurant} from '../../actions/actions'
import { connect } from 'react-redux';

class Restaurants extends Component {
  render() {
    
    return(
      <ul>
        {this.props.restaurants.map((restaurant,index) => <Restaurant key={index} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)}
      </ul>
    );
  }
};

export default connect(null, {deleteRestaurant})(Restaurants);