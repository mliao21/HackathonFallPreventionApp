import React, { Component } from 'react'
import RecommendationService from '../services/RecommendationService';

class UpdateRecommendationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            fropScore: '',
            riskFactor: '',
            recommendation: ''
        }
        this.changeFropScoreHandler = this.changeFropScoreHandler.bind(this);
        this.changeRiskFactorHandler = this.changeRiskFactorHandler.bind(this);
        this.updateRecommendation = this.updateRecommendation.bind(this);
    }

    componentDidMount(){
        RecommendationService.getRecommendationById(this.state.id).then( (res) =>{
            let rec = res.data;
            this.setState({fropScore: rec.fropScore,
                riskFactor: rec.riskFactor,
                recommendation : rec.recommendation
            });
        });
    }

    updateRecommendation = (e) => {
        e.preventDefault();
        let rec = {fropScore: this.state.fropScore, riskFactor: this.state.riskFactor, recommendation: this.state.recommendation};
        console.log('rec => ' + JSON.stringify(rec));
        console.log('id => ' + JSON.stringify(this.state.id));
        RecommendationService.updateRecommendation(rec, this.state.id).then( res => {
            this.props.history.push('/recs');
        });
    }
    
    changeFropScoreHandler= (event) => {
        this.setState({fropScore: event.target.value});
    }

    changeRiskFactorHandler= (event) => {
        this.setState({riskFactor: event.target.value});
    }

    changeRecommendationHandler= (event) => {
        this.setState({recommendation: event.target.value});
    }

    cancel(){
        this.props.history.push('/recs');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Recommendation</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> FROP Score: </label>
                                            <input placeholder="FROP Score" name="fropScore" className="form-control" 
                                                value={this.state.fropScore} onChange={this.changeFropScoreHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Risk Factor: </label>
                                            <textarea> <input placeholder="Risk Factor" name="riskFactor" className="form-control" 
                                                value={this.state.riskFactor} onChange={this.changeRiskFactorHandler} /></textarea>
                                        </div>
                                        <div className = "form-group">
                                            <label> Recommendation: </label>
                                            <input placeholder="Recommendation" name="recommendation" className="form-control" 
                                                value={this.state.recommendation} onChange={this.changeRecommendationHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateRecommendation}>Save</button>
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

export default UpdateRecommendationComponent
