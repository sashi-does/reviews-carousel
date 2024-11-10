import {Component} from 'react'
import Review from '../Review'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewId: 0}

  incState = () => {
    this.setState(prevState => ({
      reviewId: prevState.reviewId + 1,
    }))
  }

  decState = () => {
    this.setState(prevState => ({
      reviewId: prevState.reviewId - 1,
    }))
  }

  render() {
    const {reviewsList} = this.props
    const {reviewId} = this.state
    const nextReview = () => {
      if (reviewId < reviewsList.length - 1) this.incState()
    }
    const prevReview = () => {
      if (reviewId > 0) this.decState()
    }
    return (
      <>
        <div className="reviews-section">
          <div className="review-card">
            <h1 className="reviews-heading">Reviews</h1>
            <div className="each-review">
              <button
                className="change-review-button"
                data-testid="leftArrow"
                type="button"
                onClick={prevReview}
              >
                <img
                  className="profile"
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                />
              </button>
              <ul className="reviews-display">
                {reviewsList.map(eachReview =>
                  eachReview.id === reviewId ? (
                    <Review key={eachReview.id} userReview={eachReview} />
                  ) : (
                    ''
                  ),
                )}
              </ul>
              <button
                type="button"
                className="change-review-button"
                data-testid="rightArrow"
                onClick={nextReview}
              >
                <img
                  className="profile"
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ReviewsCarousel
