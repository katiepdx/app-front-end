// import superagent to get data from api
import request from 'superagent';

// API URL for fetch
const URL = process.env.REACT_APP_API_URL;

export function fetchDogsData() {
    console.log(`${URL}/dogs`);
    return request.get(`${URL}/dogs`);
}

// get one dog 
export function fetchOneDog(id) {
    return request.get(`${URL}/dogs/${id}`);
}