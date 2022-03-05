const express = require ('express');
const UpdateData= express();
const mysql = require ('mysql');
const cors = require ('cors');

UpdateData.use(cors());
UpdateData.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'FallApp'
});

UpdateData.post('/create', (req, res) => {
    const patientID= req.body.patientID
    const date= req.body.date
    const time= req.body.time
    const pupil= req.body.pupil
    const temperature= req.body.temperature
    const bloodPressure= req.body.bloodPressure
    const oxygenSaturation= req.body.oxygenSaturation
    const verbalResponse= req.body.verbalResponse

    db.query('INSERT INTO patientdata (patientID, date, time, pupil, temperature, bloodPressure, oxygenSaturation,verbalResponse) VALUES (?,?,?,?,?,?,?,?,?)', 
    [patientID, date, time,  pupil, temperature, bloodPressure, oxygenSaturation,verbalResponse],
    (err, result) => {
        if (err) {
            console.log(err);
            }  else {
                res.send("Values Inserted");
            }  
        }
    );
});

UpdateData.get('/patientData', (req, res) => {
    db.query("SELECT * FROM patientdata", (err, result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result);
        }
    });
});

UpdateData.delete('/delete/:patientID', (req, res) =>{
    const patientID = req.params.patientID;

    db.query("DELETE FROM patientdata WHERE patientID= ?", patientID, (err, result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

