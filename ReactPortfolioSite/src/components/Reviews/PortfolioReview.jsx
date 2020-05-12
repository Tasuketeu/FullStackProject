import React from 'react';
import s from './Review.module.css';

import classNames from 'classnames';
import ReCAPTCHA from "react-google-recaptcha";
import {Field,reduxForm} from "redux-form";
import { Textarea,Input } from '../common/FormsControls/FormsControls';
import AllPortfolioReviews from '../AllReviews/AllPortfolioReviews';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
let btnClass = classNames('btn', 'btn-info',s.sendRevButton);

let maxLength200=maxLengthCreator(200);
let maxLength20=maxLengthCreator(20);
function onChange(value) {
  console.log("Captcha value:", value);
}
const PortfolioReview =(props)=>{
let newReviewElement=React.createRef();

let onReviewPost=(values)=>{
  let newDate = new Date();
  let date=newDate.getDate();
  let month = newDate.getMonth() +1;
  let year = newDate.getFullYear();
  let day =newDate.getDate();

  props.sendReview(values.newReviewText, values.yourName,year,month,day);
  props.afterSubmit();      
}
let reviewElements;
if(props.reviews!==undefined){
  reviewElements= props.reviews
      .map(p=> <AllPortfolioReviews  
        message={p.review} 
        name={p.login} 
        date={p.date}
        />);
      }

      return(
        <div className={s.postsBlock}>
          
    <div className={s.ReviewBlock}>
    <div class="container">
    
    <h3 className={s.reviewHeader}>Отзывы</h3>
          <div className={s.outerContainer}>
          <div className={s.innerContainer}>
          {reviewElements}
          </div>
          </div>
          
          <AddNewReviewFormRedux onSubmit={onReviewPost}/>
          </div>
          </div>
        </div>);
}
const AddNewReviewForm =(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
    <div className={s.writeReview}>
    <p className={s.ReviewHeader}>Напишите отзыв:</p>
    <Field className={s.messageBox} name="newReviewText" component={Textarea} validate={[requiredField,maxLength200]} placeholder={"Сообщение..."}/>
    <Field className={s.yourName} name="yourName" component={Input} validate={[requiredField,maxLength20]} placeholder={"Имя..."}/>

    <button className={btnClass}>Отправить</button>
    </div>
    </form>
  );
}
let AddNewReviewFormRedux=reduxForm({form:"ReviewAddNewPostForm"})(AddNewReviewForm);

export default PortfolioReview;

