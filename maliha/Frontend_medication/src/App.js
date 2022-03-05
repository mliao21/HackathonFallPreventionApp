import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListMedicationComponent from './components/ListMedicationComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateMedicationComponent from './components/CreateMedicationComponent';
import UpdateMedicationComponent from './components/UpdateMedicationComponent';
import ViewMedicationComponent from './components/ViewMedicationComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListMedicationComponent}></Route>
                          <Route path = "/meds" component = {ListMedicationComponent}></Route>
                          <Route path = "/add-med/:id" component = {CreateMedicationComponent}></Route>
                          <Route path = "/view-med/:id" component = {ViewMedicationComponent}></Route>
                          {/* <Route path = "/update-med/:id" component = {UpdateMedicationComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
