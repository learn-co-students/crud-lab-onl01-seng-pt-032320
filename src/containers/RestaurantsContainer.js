import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRest={this.props.addRest} />
        <Restaurants delRes={this.props.delRest} restaurants={this.props.restaurants} />
      </div>
    )
  }
}

const mapStateToProps = state => { return {restaurants: state.restaurants} }
const mapDispatchToProps = dispatch => ({ 
  addRest: restaurant => dispatch({ type: 'ADD_RESTAURANT', restaurant }),
  delRest: id => dispatch({ type: 'DELETE_RESTAURANT', id }) 
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
