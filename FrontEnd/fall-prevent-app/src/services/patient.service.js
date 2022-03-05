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
    return httpClient.get('/fall/highest');
}

const exportedObject = {  getAll, create, get, update, remove, getHighRisk }

export default exportedObject;
