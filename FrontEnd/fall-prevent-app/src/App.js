import "bulma/css/bulma.css";
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  MainPage,
  PatientProfile,
  AddPatient,
} from "./components";
// import BookData from "./data.json";

class App extends Component {
  // state = {
  //   patientsList: []
  // };

  // async componentDidMount() {
  //   const res = await patientService.getAll();
  //   const body = await res.json();
  //   this.setState({patientsList: body});
  // }

  render() {
    // const {patientsList} = this.state;
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/view-patient/:id" element={<PatientProfile />} />
          <Route path="/new_patient" element={<AddPatient />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
