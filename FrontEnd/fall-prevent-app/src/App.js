import "bulma/css/bulma.css";
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  MainPage,
  PatientProfile,
} from "./components";
import BookData from "./data.json";
import AddPatient from "./components/AddPatient";


class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage data={BookData}/>} />
          <Route path="/patient_profile" element={<PatientProfile />} />
          <Route path="/new_patient" element={<AddPatient />} />
          {/* <Route path="/patient_search" element={<SearchPatient data={BookData}/>} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
