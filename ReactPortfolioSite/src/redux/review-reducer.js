import { reviewAPI } from "../api/api";
import { reset, reduxForm } from 'redux-form';

const ADD_REVIEW = 'ADD_REVIEW';
const SET_REVIEW = 'SET_REVIEW';
const UPDATE_NEW_REVIEW_TEXT = 'UPDATE_NEW_REVIEW_TEXT';

let initialState={
    reviews:[
    ]
};

const reviewReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_REVIEW:
            let newReview={
                login:action.yourName,
                review:action.newReviewText,
                date:
                [action.year,
                    action.month,
                    action.day
                ]
            }
            return {
                ...state,
                reviews:[...state.reviews,newReview]
            };
            case SET_REVIEW:
                return {
                    ...state,
                    reviews:action.reviews,
                };
                
        default:
            return state;
    }
    }

    export const addReviewActionCreator = (newReviewText,yourName,year,month,day)=> ({ type: ADD_REVIEW,
        newReviewText,yourName,year,month,day});
        export const setReviewsActionCreator = (reviews)=> ({ type: SET_REVIEW,
            reviews});

    export const getReviews = ()=>(dispatch)=> {
            reviewAPI.getReviews()
            .then(data => {
                console.log(data);
                dispatch(setReviewsActionCreator(data));
            });
};

    export const sendReview = (review,name,date,year,month,day)=> {
        return(dispatch)=>{
    reviewAPI.sendReview(review,name)
    .then(data => {
        dispatch(addReviewActionCreator(review,name,date,year,month,day));
    });
}
};
export const afterSubmit = () => (dispatch) =>{
  dispatch(reset('ReviewAddNewPostForm'));
}

    export default reviewReducer;