import React from 'react';
import {addReviewActionCreator, UpdateNewReviewTextActionCreator} from "../../redux/review-reducer";
import {connect} from "react-redux";
import PortfolioReview from "./PortfolioReview";
import {Redirect, withRouter} from "react-router-dom";
import {getReviews,sendReview,afterSubmit} from "../../redux/review-reducer";
import {compose} from "redux";

class ReviewContainer extends React.Component{

  componentDidMount() {
      this.props.getReviews();
  }

  render() {

      return (
          <PortfolioReview {...this.props} 
          message={this.props.message} 
          name={this.props.name} 
          date={this.props.date} 
          />
      )}
}

let mapStateToProps=(state)=>{
  return{
      reviews: state.reviewPage.reviews,
      name:state.reviewPage.yourName,
      newReviewText:state.reviewPage.newReviewText
  }
}
// let mapDispatchToProps=(dispatch)=>{
//   return{
//       addReview:(newReviewText,yourName)=>{
//           dispatch(addReviewActionCreator(newReviewText,yourName));
//       }
//   }
// }

export default compose(connect(mapStateToProps, {getReviews,sendReview,afterSubmit}
  ),
  withRouter,
  // withAuthRedirect
  )
(ReviewContainer);

