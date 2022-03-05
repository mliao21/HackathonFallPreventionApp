import "bulma/css/bulma.css";
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  MainPage,
  PatientProfile,
  AddPatient,
} from "./components";
import ListMedicationComponent from './components/ListMedicationComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateMedicationComponent from './components/CreateMedicationComponent';
import ViewMedicationComponent from './components/ViewMedicationComponent';


class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/view-patient/:id" element={<PatientProfile />} />
          <Route path="/new_patient" element={<AddPatient />} />
          <Route path="/meds" element={<ListMedicationComponent />} />
          <Route path="/add-med/:id" element={<CreateMedicationComponent />} />
          <Route path="/view-med/:id" element={<ViewMedicationComponent />} />
        </Routes>
      </Router>

    );
  }
}

export default App;
