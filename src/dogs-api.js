// import superagent to get data from api
import request from 'superagent';

// API URL for fetch
const URL = 'http://localhost:3000';
// const URL = process.env.REACT_APP_API_URL;

export function fetchDogsData() {
    return request.get(`${URL}/dogs`);
}

// get one dog 
export function fetchOneDog(id) {
    return request.get(`${URL}/dogs/${id}`);
}

// fetch dog sizes from api 
export function fetchDogSizes() {
    try {
        return request.get(`${URL}/sizes`);
    } catch(e) {
        return { error: e.message }
    }
}

// create a dog tile function using the data from the form
export function createDogTile(dogData) {
    // make a POST request with the dogData...add to dogs list page
    return request.post(`${URL}/dogs`, dogData)
}

// DELETE a dog tile function
export function deleteDogTile(id) {
    // make a DELETE request with the 
    return request.delete(`${URL}/dogs/${id}`)
}