import React, { Component } from 'react';

class ReviewInput extends Component {

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
    let newReview= Object.assign({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.props.addReview(newReview)
    this.setState({
      text:''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <input type='text' value={this.state.text} name="text" onChange={(e) => this.handleOnChange(e)}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
