import React from 'react';
import s from './AllReviews.module.css';

const AllPortfolioReviews =(props)=>{
  return(
    <div className={s.item}>
      <div>
      <div className={s.revName}>
      <h5 className={s.revNameText}>{props.name}</h5>
      </div>
      <div>
      {props.date[2]}.{props.date[1]}.{props.date[0]}
      </div>
        <div className={s.revText}>
        <p className={s.revPText}>{props.message}</p>
      </div>
      </div>
    </div>);
}

export default AllPortfolioReviews;

