import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";
import reviewReducer from "./review-reducer.js";

let reducers=combineReducers({
    form:formReducer,
    app:appReducer,
    reviewPage:reviewReducer
});
let store=createStore(reducers,applyMiddleware(thunkMiddleware));

window.store=store;

export default store;