import React from 'react'
import {useEffect, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import patientService from "../services/patient.service";
import {css} from "@emotion/react";

const AddPatient = () => {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[fropScore, setFropScore] = useState('');
    const[diagnosis, setDiagnosis] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const savePatient = (e) => {
        e.preventDefault();

        const patient = {firstName, lastName, fropScore, diagnosis, id};
        if (id) {
            //update
            patientService.update(patient)
                .then(response => {
                    console.log('Patient data updated successfully', response.data);
                    navigate('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        } else {
            //create
            patientService.create(patient)
                .then(response => {
                    console.log("patient added successfully", response.data);
                    navigate("/");
                })
                .catch(error => {
                    navigate('something went wrong', error);
                })
        }
    }

    useEffect(() => {
        if (id) {
            patientService.get(id)
                .then(patient => {
                    setFirstName(patient.data.firstName);
                    setLastName(patient.data.lastName);
                    setFropScore(patient.data.fropScore);
                    setDiagnosis(patient.data.diagnosis);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    return (

        <body className="has-background-primary-light">
          <div className="container">

            <h1 className="title">Add Patient</h1>

            <hr/>
            <form>

                <div className="field">
                    <label className="label">First Name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter first Name"
                            value={firstName}
                            onChange = {(e) => setFirstName(e.target.value)}

                        />
                    </div>
                </div>



                <div className="field">
                    <label className="label">Last Name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter last name"
                            value={lastName}
                            onChange = {(e) => setLastName(e.target.value)}

                        />
                    </div>
                </div>



                <div className="field">
                    <label className="label">FROP Score</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter FROP Score"
                            value={fropScore}
                            onChange = {(e) => setFropScore(e.target.value)}

                        />
                    </div>
                </div>


                <div className="field">
                    <label className="label">Diagnosis</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter diagnosis"
                            value={diagnosis}
                            onChange = {(e) => setDiagnosis(e.target.value)}

                        />
                    </div>
                </div>
                <div >
                    <button className= "button is-primary" onClick={(e) => savePatient(e)}>Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Main Page</Link>
          </div>
        </body>



    )
}

export default AddPatient;


