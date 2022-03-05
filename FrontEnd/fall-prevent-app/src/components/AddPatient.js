/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react'
import {useEffect, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import patientService from "../services/patient.service";


const AddPatient = () => {

    const[name, setName] = useState('');
    const[bloodtype, setBloodtype] = useState('');
    const[sex, setSex] = useState('');
    const[phn, setPhn] = useState('');
    const[diagnosis, setDiagnosis] = useState('');
    const[weight, setWeight] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const savePatient = (e) => {
        e.preventDefault();

        const patient = {name, bloodtype, sex, phn, diagnosis,  id};
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
                    setName(patient.data.name);
                    setBloodtype(patient.data.bloodtype);
                    setSex(patient.data.sex);
                    setPhn(patient.data.phn);
                    setDiagnosis(patient.data.diagnosis);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    return (

        <body css={css`background-color: #A7C7E7; min-height: 100vh`}>
        <div className="container">

            <h1 className="title">Add Patient</h1>

            <hr/>
            <form>

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter full name starting with the first name."
                            value={name}
                            onChange = {(e) => setName(e.target.value)}

                        />
                    </div>
                </div>



                <div className="field">
                    <label className="label">Blood Type</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter blood type."
                            value={bloodtype}
                            onChange = {(e) => setBloodtype(e.target.value)}

                        />
                    </div>
                </div>



                <div className="field">
                    <label className="label">Sex</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter sex."
                            value={sex}
                            onChange = {(e) => setSex(e.target.value)}

                        />
                    </div>
                </div>


                <div className="field">
                    <label className="label">PHN</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter PHN"
                            value={phn}
                            onChange = {(e) => setPhn(e.target.value)}

                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Diagnosis</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter diagnosis."
                            value={diagnosis}
                            onChange = {(e) => setDiagnosis(e.target.value)}

                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Weight</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter weight."
                            value={weight}
                            onChange = {(e) => setWeight(e.target.value)}

                        />
                    </div>
                </div>
                <div >
                    <button className= "button is-link" onClick={(e) => savePatient(e)}>Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Main Page</Link>
        </div>
        </body>



    )
}

export default AddPatient;



