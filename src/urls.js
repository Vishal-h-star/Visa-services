import axios from 'axios';

// for local development 
// export const BASE_URL = "http://localhost:4000/api/";
// export const ImageUrl = "http://localhost:4000/file/images/";


/// FOR QA'S
export const BASE_URL = "https://testapi.bharatprinthub.com/api/";
export const ImageUrl = "https://testapi.bharatprinthub.com/file/images/";


const TOKEN = localStorage.getItem("UserDetailToken");

console.log(TOKEN, 'TOKEN')

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:  {token: `Bearer ${TOKEN}`},
});