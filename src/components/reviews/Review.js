import React from 'react'

class Review extends React.Component {
  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return(
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleOnClick}>X</button>
      </div>
    )
  }
}

export default Review