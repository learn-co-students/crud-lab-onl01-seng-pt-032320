import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit(e){
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input type='text' value={this.state.text} name="text" onChange={(e) => this.handleOnChange(e)} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
