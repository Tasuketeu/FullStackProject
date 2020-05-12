import React,{Component} from 'react';
import './App.css';
import {BrowserRouter,Route,withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import store from './redux/redux-store';
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import PortfolioContainer from './components/MainContainer/PortfolioContainer/PortfolioContainer';
import Footer from '../src/components/Footer/Footer';
import ReviewContainer from './components/Reviews/ReviewContainer';
import {Helmet} from "react-helmet";
import AllPortfolioReviews from './components/AllReviews/AllPortfolioReviews';


class App extends Component {

  render(){
  return (
    <div className="app-wrapper">
    <Helmet>
                <meta charSet="utf-8" />
                <title>Массаж</title>
            </Helmet>

<PortfolioContainer />
<Route exact path='/reviews' component={ReviewContainer} />
<Footer/>
    </div>
  );
         }
}


export default App;
