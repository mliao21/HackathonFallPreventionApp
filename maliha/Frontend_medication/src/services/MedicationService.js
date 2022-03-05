import axios from 'axios';

const MEDICATION_API_BASE_URL = "http://localhost:8080/api/v1/meds";

class MedicationService {

    getMedications(){
        return axios.get(MEDICATION_API_BASE_URL);
    }

    createMedication(med){
        return axios.post(MEDICATION_API_BASE_URL, med);
    }

    getMedicationById(medId){
        return axios.get(MEDICATION_API_BASE_URL + '/' + medId);
    }

    updateMedication(med, medId){
        return axios.put(MEDICATION_API_BASE_URL + '/' + medId, med);
    }

    deleteMedication(medId){
        return axios.delete(MEDICATION_API_BASE_URL + '/' + medId);
    }
}

export default new MedicationService()