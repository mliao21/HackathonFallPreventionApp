import React, { Component } from 'react'
import MedicationService from '../services/MedicationService';

class CreateMedicationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            fropScore: '',
            riskFactor: '',
            medication: ''
        }
        this.changeFropScoreHandler = this.changeFropScoreHandler.bind(this);
        this.changeRiskFactorHandler = this.changeRiskFactorHandler.bind(this);
        this.saveOrUpdateMedication = this.saveOrUpdateMedication.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            MedicationService.getMedicationById(this.state.id).then( (res) =>{
                let med = res.data;
                this.setState({fropScore: med.fropScore,
                    riskFactor: med.riskFactor,
                    medication : med.medication
                });
            });
        }        
    }
    saveOrUpdateMedication = (e) => {
        e.preventDefault();
        let med = {fropScore: this.state.fropScore, riskFactor: this.state.riskFactor, medication: this.state.medication};
        console.log('med => ' + JSON.stringify(med));

        // step 5
        if(this.state.id === '_add'){
            MedicationService.createMedication(med).then(res =>{
                this.props.history.push('/meds');
            });
        }else{
            MedicationService.updateMedication(med, this.state.id).then( res => {
                this.props.history.push('/meds');
            });
        }
    }
    
    changeFropScoreHandler= (event) => {
        this.setState({fropScore: event.target.value});
    }

    changeRiskFactorHandler= (event) => {
        this.setState({riskFactor: event.target.value});
    }

    changeMedicationHandler= (event) => {
        this.setState({medication: event.target.value});
    }

    cancel(){
        this.props.history.push('/meds');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Medication</h3>
        }else{
            return <h3 className="text-center">Update Medication</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> FROP Score: </label>
                                            <input placeholder="FROP Score" name="fropScore" className="form-control" 
                                                value={this.state.fropScore} onChange={this.changeFropScoreHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Risk Factor: </label>
                                            <input placeholder="Risk Factor" name="riskFactor" className="form-control" 
                                                value={this.state.riskFactor} onChange={this.changeRiskFactorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Medication: </label>
                                            <input placeholder="Medication" name="medication" className="form-control" 
                                                value={this.state.medication} onChange={this.changeMedicationHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateMedication}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateMedicationComponent
