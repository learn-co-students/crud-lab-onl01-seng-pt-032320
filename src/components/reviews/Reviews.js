import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews= () => { 
    return this.props.reviews.map(rev => <Review key={rev.id} delRev={this.props.delRev} review={rev} />) 
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;