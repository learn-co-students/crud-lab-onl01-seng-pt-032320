import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'
class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addPlace={this.props.addPlace}/>
        <Restaurants restaurants={this.props.restaurants} delete={this.props.delete}/>
      </div>
    )
  }
}


const mapStateToProps =({ restaurants }) => ({ restaurants })
const mapDispatchToProps = dispatch =>({
  addPlace: restaurant => dispatch({type: 'Add_Place', restaurant}),
  editPlace: id => dispatch({ type: 'Edit_Place', id}),
  deletePlace: id => dispatch({type: 'Delete_Place', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
 