import React, { Component } from 'react'
import RecommendationService from '../services/RecommendationService'

class ListRecommendationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                recs: []
        }
        this.addRecommendation = this.addRecommendation.bind(this);
        this.editRecommendation = this.editRecommendation.bind(this);
        this.deleteRecommendation = this.deleteRecommendation.bind(this);
    }

    deleteRecommendation(id){
        RecommendationService.deleteRecommendation(id).then( res => {
            this.setState({recs: this.state.recs.filter(rec => rec.id !== id)});
        });
    }
    viewRecommendation(id){
        this.props.history.push(`/view-rec/${id}`);
    }
    editRecommendation(id){
        this.props.history.push(`/add-rec/${id}`);
    }

    componentDidMount(){
        RecommendationService.getRecommendations().then((res) => {
            this.setState({ recs: res.data});
        });
    }

    addRecommendation(){
        this.props.history.push('/add-rec/_add');
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>              
                 <h2 className="text-center">Recommendation List</h2>
                 <br></br>
                 <div className = "row">                    
                    <button style={{color: "Red"}} className="btn btn-warning" onClick={this.addRecommendation}> Add New Recommendation</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> FROP Score</th>
                                    <th> Risk Factor</th>
                                    <th> Recommendation</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.recs.map(
                                        rec => 
                                        <tr key = {rec.id}>
                                             <td> { rec.fropScore} </td>   
                                             <td> {rec.riskFactor}</td>
                                             <td>{rec.recommendation}</td>
                                             <td>
                                                 <button onClick={ () => this.editRecommendation(rec.id)} className="btn btn-warning">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteRecommendation(rec.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewRecommendation(rec.id)} className="btn btn-warning">View    </button>                                              
                                                                                                
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

export default ListRecommendationComponent
