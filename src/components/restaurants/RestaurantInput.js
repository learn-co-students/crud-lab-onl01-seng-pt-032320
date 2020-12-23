import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Restaurant Name</label>
          <input type='text' onChange={this.handleChange}></input>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
