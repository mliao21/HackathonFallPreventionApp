import React, { Component } from 'react'
import RecommendationService from '../services/RecommendationService'

class ViewRecommendationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            rec: {}
        }
    }

    componentDidMount(){
        RecommendationService.getRecommendationById(this.state.id).then( res => {
            this.setState({rec: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Recommendation Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> FROP Score : </label>
                            <div> { this.state.rec.fropScore }</div>
                        </div>
                        <div className = "row">
                            <label> Risk Factor : </label>
                            <div> { this.state.rec.riskFactor }</div>
                        </div>
                        <div className = "row">
                            <label> Recommendation : </label>
                            <div> { this.state.rec.recommendation }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewRecommendationComponent
