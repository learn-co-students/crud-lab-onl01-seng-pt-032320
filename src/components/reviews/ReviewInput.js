import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = { text: '', restaurantId: this.props.restaurantId  };

  handleChange = (e) => { this.setState({ text: e.target.value }); }
  handleSubmit = (e) => { e.preventDefault(); this.props.addRev(this.state); this.setState({text: ''}); }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>Add Review: </label>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
