// Write your code here
import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  render() {
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList

    return (
      <div className="bg-container">
        <div className="review-carousel-container">
          <h1 className="heading">Reviews</h1>
          <div className="reviews-container">
            <button className="button" type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="left-arrow"
                alt="left arrow"
              />
            </button>
            <div className="main-review-container">
              <img src={imgUrl} alt={username} className="reviewer" />
              <h1 className="reviewer-name">{username}</h1>
              <p className="reviewer-company">{companyName}</p>
              <p className="writen-reviewer">{description}</p>
            </div>
            <button className="button" type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="left-arrow"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
