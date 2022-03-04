import React, { Component } from "react";
import './UpdateData.css';
import { useState } from "react";
import Axios from "axios";
import { response } from "express";

function UpdateData () {
    const [dataID, setDataID] = useState(0);
    const [patientID, setPatientID] = useState(0);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [pupil, setPupil] = useState("");
    const [temperature, setTemperature] = useState(0);
    const [bloodPressure, setBloodPressure] = useState(0);
    const [oxygenSaturation, setOxygenSaturation] = useState("");
    const [verbalResponse, setVerbalResponse] = useState("");

    const [patientDataList, setPatientDataList] = useState([]);

    const addPatientData = () => {
        Axios.post("http://localhost:3000/new_patient/create", {
            dataID: dataID, 
            patientID: patientID, 
            date: date, 
            time: time, 
            pupil: pupil, 
            temperature: temperature, 
            bloodPressure: bloodPressure, 
            oxygenSaturation: oxygenSaturation, 
            verbalResponse: verbalResponse
        }).then(() => {
            setPatientDataList([...patientDataList, 
                {
                dataID: dataID, 
                patientID: patientID, 
                date: date, 
                time: time, 
                pupil: pupil, 
                temperature: temperature, 
                bloodPressure: bloodPressure, 
                oxygenSaturation: oxygenSaturation, 
                verbalResponse: verbalResponse
            }
        ]);
        });
    };

    const getPatientData = () => {
        Axios.get("http://localhost:3000/new_patient/patientData").then((response) => {
           setPatientDataList(response.data);
        });
    };

    return ( 
    <div className="UpdateData">
        <div className="PatientData">
        <label>DataID:</label>
        <input type= "number" onChange={(event) => {
            setDataID(event.target.value)
        }}
        />
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
                <h3>DataID: {val.dataID}</h3>
                <h3>PatientID: {val.patientID}</h3>
                <h3>Date: {val.date}</h3>
                <h3>Time: {val.time}</h3>
                <h3>Pupil: {val.pupil}</h3>
                <h3>Temperature: {val.temperature}</h3>
                <h3>BloodPressure: {val.bloodPressure}</h3>
                <h3>OxygenSaturation: {val.oxygenSaturation}</h3>
                <h3>VerbalResponse: {val.verbalResponse}</h3>
            </div>
        })};
        </div>
    </div>
    );
};