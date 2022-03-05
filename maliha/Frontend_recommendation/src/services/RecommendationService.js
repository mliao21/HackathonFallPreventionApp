import axios from 'axios';

const MEDICATION_API_BASE_URL = "http://localhost:8080/api/v1/recs";

class RecommendationService {

    getRecommendations(){
        return axios.get(MEDICATION_API_BASE_URL);
    }

    createRecommendation(rec){
        return axios.post(MEDICATION_API_BASE_URL, rec);
    }

    getRecommendationById(recId){
        return axios.get(MEDICATION_API_BASE_URL + '/' + recId);
    }

    updateRecommendation(rec, recId){
        return axios.put(MEDICATION_API_BASE_URL + '/' + recId, rec);
    }

    deleteRecommendation(recId){
        return axios.delete(MEDICATION_API_BASE_URL + '/' + recId);
    }
}

export default new RecommendationService()