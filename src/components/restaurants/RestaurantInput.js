import React, { Component } from 'react';

class RestaurantInput extends Component {
  
  state ={
    name: ''
  }

  handleOnChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit(e){
    e.preventDefault()
    this.props.addRestaurant(this.state.name)
    this.setState({
      name: '',
    })

  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Restaurant Name:</label><br/>
          <input type="text" value={this.state.name} onChange={this.handleOnChange}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
