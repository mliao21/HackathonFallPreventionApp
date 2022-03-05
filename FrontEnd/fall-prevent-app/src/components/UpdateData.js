import React, { Component } from "react";
import './UpdateData.css';
import { useState } from "react";
import Axios from "axios";
import { response } from "express";

function UpdateData () {
    const [patientID, setPatientID] = useState(0);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [pupil, setPupil] = useState("");
    const [temperature, setTemperature] = useState(0);
    const [bloodPressure, setBloodPressure] = useState(0);
    const [pulse, setPulse] = useState(0);
    const [oxygenSaturation, setOxygenSaturation] = useState("");
    const [verbalResponse, setVerbalResponse] = useState("");

    const [patientDataList, setPatientDataList] = useState([]);

    const addPatientData = () => {
        Axios.post("http://localhost:3000/new_patient/create", {
            patientID: patientID, 
            date: date, 
            time: time, 
            pupil: pupil, 
            temperature: temperature, 
            bloodPressure: bloodPressure,
            pulse: pulse, 
            oxygenSaturation: oxygenSaturation, 
            verbalResponse: verbalResponse
        }).then(() => {
            setPatientDataList([...patientDataList, 
                { 
                patientID: patientID, 
                date: date, 
                time: time, 
                pupil: pupil, 
                temperature: temperature, 
                bloodPressure: bloodPressure,
                pulse: pulse, 
                oxygenSaturation: oxygenSaturation, 
                verbalResponse: verbalResponse
            },
        ]);
        });
    };

    const getPatientData = () => {
        Axios.get("http://localhost:3000/new_patient/patientData").then((response) => {
           setPatientDataList(response.data);
        });
    };

    const deletePatientData = (patientID) => {
        Axios.delete('http://localhost:3000/new_patient/delete/${patientID}').then((response) => {
            setPatientDataList(patientDataList.filter((val) => {
                return val.patientID != patientID;
         }));
        });
    };

    return ( 
    <div className="UpdateData">
        <div className="PatientData">
        <label>PatientID:</label>
        <input type= "number" onChange={(event) => {
            setPatientID(event.target.value)
        }}    
        />
        <label>Date:</label>
        <input type= "text" onChange={(event) => {
            setDate(event.target.value)
        }} 
        />
        <label>Time:</label>
        <input type= "text" onChange={(event) => {
            setTime(event.target.value)
        }} 
        />
        <label>Pupil:</label>
        <input type= "text" onChange={(event) => {
            setPupil(event.target.value)
        }} 
        />
        <label>Temperature:</label>
        <input type= "number" onChange={(event) => {
            setTemperature(event.target.value)
        }} 
        />
        <label>BloodPressure:</label>
        <input type= "number" onChange={(event) => {
            setBloodPressure(event.target.value)
        }} 
        />
        <label>Pulse:</label>
        <input type= "number" onChange={(event) => {
            setPulse(event.target.value)
        }}
        />
        <label>OxygenSaturation:</label>
        <input type= "text" onChange={(event) => {
            setOxygenSaturation(event.target.value)
        }} 
        />
        <label>VerbalResponse:</label>
        <input type= "text" onChange={(event) => {
            setVerbalResponse(event.target.value)
        }} 
        />

        <button onClick={addPatientData}>Add PatientData</button>

        </div>
        <div className="PatientData">
        <button onClick={getPatientData}>Show PatientData</button>

        {patientDataList.map((val, key) =>{
            return <div className="patientDataList">
                <div>
                <h3>PatientID: {val.patientID}</h3>
                <h3>Date: {val.date}</h3>
                <h3>Time: {val.time}</h3>
                <h3>Pupil: {val.pupil}</h3>
                <h3>Temperature: {val.temperature}</h3>
                <h3>BloodPressure: {val.bloodPressure}</h3>
                <h3>Pulse: {val.pulse}</h3>
                <h3>OxygenSaturation: {val.oxygenSaturation}</h3>
                <h3>VerbalResponse: {val.verbalResponse}</h3>
                </div>
                <div className="deleteButton">
                    <button onClick={() => {deletePatientData(val.patientID);}}>Delete</button>
                </div>
            </div>
        })};
        </div>
    </div>
    );
};