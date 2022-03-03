import "bulma/css/bulma.css";
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  MainPage,
  // SearchPatient,
} from "./components";
import AddPatient from "./components/AddPatient";
// import BookData from "./data.json";

class App extends Component {
  state = {
    // userLists: [],
  };

  async componentDidMount() {
    // const resUsers = await fetch('/users');
    // const usersBody = await resUsers.json();
    // this.setState({ userLists: usersBody });

  }

  render() {
    const { userLists } = this.state;
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/new_patient" element={<AddPatient />} />
          {/* <Route path="/patient_search" element={<SearchPatient data={BookData}/>} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
