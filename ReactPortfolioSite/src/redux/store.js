import {combineReducers, createStore} from "redux";
import reviewReducer from "./review-reducer";



let store={
    _state:{
        reviewPage:{
            reviews:[
            ],
            newReviewText:""
        },
    },
    getState(){
      return this._state;
    },
    _rerenderEntireTree(){

    },
    // _addReview(){
    //         let newReview={
    //             id:10,
    //             message:this._state.profilePage.newReviewText,
    //             likesCount:0
    //         }
    //         this._state.profilePage.reviews.push(newReview);
    //         this._state.profilePage.newPostText='';
    //         this.rerenderEntireTree(this._state);
    //     },
    //     _UpdateNewPostText(newText){
    //         this._state.profilePage.newPostText=newText;
    //         this.rerenderEntireTree(this._state);
    //     },

    subscribe(observer) {
        this._rerenderEntireTree=observer;
    },
    dispatch(action) {

        this._state.movies=moviesReducer(this._state.movies,action);
        this._state.reviewPage=reviewReducer(this._state.reviewPage,action);
        this._rerenderEntireTree(this._state);

    }

};



window.store=store;

export default store;