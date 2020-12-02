import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {addRestaurant, deleteRestaurant} from '../actions/actions'

class RestaurantsContainer extends Component {

  render() {
    const {restaurants, addRestaurant, deleteRestaurant} = this.props
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants restaurants={restaurants} deleteRestaurant={deleteRestaurant}/>
      </div>
    )
  }
}

export default connect(({restaurants})=>({restaurants}), {addRestaurant, deleteRestaurant})(RestaurantsContainer);
