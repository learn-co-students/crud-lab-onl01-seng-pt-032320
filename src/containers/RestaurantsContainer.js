import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {addRestraunt} from '../actions/actions'

class RestaurantsContainer extends Component {

  render() {
    const {restaurants, addRestraunt} = this.props
    return (
      <div>
        <RestaurantInput addRestraunt={addRestraunt} />
        <Restaurants restaurants={restaurants}/>
      </div>
    )
  }
}

export default connect(({restaurants})=>({restaurants}), {addRestraunt})(RestaurantsContainer);
