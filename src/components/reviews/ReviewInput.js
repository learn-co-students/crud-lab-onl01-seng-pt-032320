import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state ={
    review: ''
  }

  handleOnChange(e){
    this.setState({
      review: e.target.value
    })
  }

  handleOnSubmit(e){
    e.preventDefault()
    this.props.addreview(this.state.review)
    this.setState({
      review: '',
    })

  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Please leave a review:</label><br/>
          <input type="text" value={this.state.review} onChange={this.handleOnChange}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
