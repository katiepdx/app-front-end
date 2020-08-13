// import superagent to get data from api
import request from 'superagent';

// API URL for fetch
const URL = 'https://fullstack-app-dogs.herokuapp.com/dogs';

export function fetchDogsData() {
    return request.get(`${URL}`);

}