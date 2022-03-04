import "bulma/css/bulma.css";
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  MainPage,
  PatientProfile,
} from "./components";
import BookData from "./data.json";

class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage data={BookData}/>} />
          <Route path="/new_patient" element={<PatientProfile />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
