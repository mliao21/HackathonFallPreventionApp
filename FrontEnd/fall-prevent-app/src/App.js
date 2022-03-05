import "bulma/css/bulma.css";
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  MainPage,
  PatientProfile,
  AddPatient,
} from "./components";
import BookData from "./data.json";
import ListMedicationComponent from './components/ListMedicationComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateMedicationComponent from './components/CreateMedicationComponent';
import ViewMedicationComponent from './components/ViewMedicationComponent';


class App extends Component {

  render() {
    return (
      // <Router>
      //   <Routes>
      //     {/* <Route path="/" element={<MainPage data={BookData} />} />
      //     <Route path="/patient_profile" element={<PatientProfile />} />
      //     <Route path="/new_patient" element={<AddPatient />} /> */}
      //     <HeaderComponent />
      // <Route path="/" exact component={ListMedicationComponent}></Route>
      // <Route path="/meds" component={ListMedicationComponent}></Route>
      // <Route path="/add-med/:id" component={CreateMedicationComponent}></Route>
      // <Route path="/view-med/:id" component={ViewMedicationComponent}></Route>
      //     <FooterComponent />
      //   </Routes>
      // </Router>
      <div>
        <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" exact component={ListMedicationComponent}></Route>
              <Route path="/meds" component={ListMedicationComponent}></Route>
              <Route path="/add-med/:id" component={CreateMedicationComponent}></Route>
              <Route path="/view-med/:id" component={ViewMedicationComponent}></Route>
            </Routes>
          </div>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default App;
