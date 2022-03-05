import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListRecommendationComponent from './components/ListRecommendationComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateRecommendationComponent from './components/CreateRecommendationComponent';
import UpdateRecommendationComponent from './components/UpdateRecommendationComponent';
import ViewRecommendationComponent from './components/ViewRecommendationComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListRecommendationComponent}></Route>
                          <Route path = "/recs" component = {ListRecommendationComponent}></Route>
                          <Route path = "/add-rec/:id" component = {CreateRecommendationComponent}></Route>
                          <Route path = "/view-rec/:id" component = {ViewRecommendationComponent}></Route>
                          {/* <Route path = "/update-rec/:id" component = {UpdateRecommendationComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
