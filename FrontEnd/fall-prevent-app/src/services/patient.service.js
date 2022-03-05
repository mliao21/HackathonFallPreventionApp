import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/patients');
}

const create = data => {
    return httpClient.post("/patients", data);
}

const get = id => {
    return httpClient.get(`/patients/${id}`);
}

const update = data => {
    return httpClient.put('/patients', data);
}

const remove = id => {
    return httpClient.delete(`/patients/${id}`);
}

const getHighRisk = () => {
    return httpClient.get('/fall/highest/');
}

const getFrop = id => {
    return httpClient.get(`/fall/${id}`);
}

const getVital = id => {
    return httpClient.get(`/patientdata/${id}`);
}

const getRecs = id => {
    return httpClient.get(`/api/v1/recs/${id}`);
}

const getMeds = id => {
    return httpClient.get(`/api/v1/meds/${id}`);
}

const getNotes = id => {
    return httpClient.get(`/comments/${id}`);
}

const exportedObject = {  getAll, create, get, update, remove, getHighRisk, getFrop, getVital, getRecs, getMeds, getNotes }

export default exportedObject;
