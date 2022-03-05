import React, { Component } from 'react'
import MedicationService from '../services/MedicationService'

class ViewMedicationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            med: {}
        }
    }

    componentDidMount(){
        MedicationService.getMedicationById(this.state.id).then( res => {
            this.setState({med: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Medication Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> FROP Score : </label>
                            <div> { this.state.med.fropScore }</div>
                        </div>
                        <div className = "row">
                            <label> Risk Factor : </label>
                            <div> { this.state.med.riskFactor }</div>
                        </div>
                        <div className = "row">
                            <label> Medication : </label>
                            <div> { this.state.med.medication }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMedicationComponent
