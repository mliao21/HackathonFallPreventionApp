import React, { Component } from 'react'
import MedicationService from '../services/MedicationService'

class ListMedicationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                meds: []
        }
        this.addMedication = this.addMedication.bind(this);
        this.editMedication = this.editMedication.bind(this);
        this.deleteMedication = this.deleteMedication.bind(this);
    }

    deleteMedication(id){
        MedicationService.deleteMedication(id).then( res => {
            this.setState({meds: this.state.meds.filter(med => med.id !== id)});
        });
    }
    viewMedication(id){
        this.props.history.push(`/view-med/${id}`);
    }
    editMedication(id){
        this.props.history.push(`/add-med/${id}`);
    }

    componentDidMount(){
        MedicationService.getMedications().then((res) => {
            this.setState({ meds: res.data});
        });
    }

    addMedication(){
        this.props.history.push('/add-med/_add');
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>                
                 <h2 className="text-center">Medication Contributing to the Risk of Falling</h2>
                 <br></br>
                 <div className = "row">                    
                    <button style={{color: "Red"}} className="btn btn-warning" onClick={this.addMedication}> Add New Medication</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> FROP Score</th>
                                    <th> Risk Factor</th>
                                    <th> Medication (Prescribed/Non-Prescribed or OTC)</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.meds.map(
                                        med => 
                                        <tr key = {med.id}>
                                             <td> { med.fropScore} </td>   
                                             <td> {med.riskFactor}</td>
                                             <td> {med.medication}</td>
                                             <td>
                                                 <button onClick={ () => this.editMedication(med.id)} className="btn btn-warning">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMedication(med.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewMedication(med.id)} className="btn btn-warning">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListMedicationComponent
