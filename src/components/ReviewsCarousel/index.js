// Write your code here
import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickLightArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewIndex
    ]

    return (
      <div className="bg-container">
        <div className="review-carousel-container">
          <h1 className="heading">Reviews</h1>
          <div className="reviews-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickLightArrow}
              // testid="leftArrow"
            >
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
            <button
              className="button"
              type="button"
              // testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
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
