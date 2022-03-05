import React, { Component } from 'react'
import MedicationService from '../services/MedicationService';

class UpdateMedicationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            fropScore: '',
            riskFactor: '',
            medication: ''
        }
        this.changeFropScoreHandler = this.changeFropScoreHandler.bind(this);
        this.changeRiskFactorHandler = this.changeRiskFactorHandler.bind(this);
        this.updateMedication = this.updateMedication.bind(this);
    }

    componentDidMount(){
        MedicationService.getMedicationById(this.state.id).then( (res) =>{
            let med = res.data;
            this.setState({fropScore: med.fropScore,
                riskFactor: med.riskFactor,
                medication : med.medication
            });
        });
    }

    updateMedication = (e) => {
        e.preventDefault();
        let med = {fropScore: this.state.fropScore, riskFactor: this.state.riskFactor, medication: this.state.medication};
        console.log('med => ' + JSON.stringify(med));
        console.log('id => ' + JSON.stringify(this.state.id));
        MedicationService.updateMedication(med, this.state.id).then( res => {
            this.props.history.push('/meds');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Medication</h3>
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

                                        <button className="btn btn-success" onClick={this.updateMedication}>Save</button>
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

export default UpdateMedicationComponent
