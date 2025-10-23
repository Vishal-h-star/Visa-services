import axios from 'axios';

// for local development 
// export const BASE_URL = "http://192.168.1.34:5000/api/";
// export const ImageUrl = "http://192.168.1.34:5000/file/images/";
export const BASE_URL = "http://localhost:5000/api/";
export const ImageUrl = "http://localhost:5000/file/images/";


const TOKEN = localStorage.getItem("UserDetailToken");

console.log(TOKEN, 'TOKEN')

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:  {token: `Bearer ${TOKEN}`},
});