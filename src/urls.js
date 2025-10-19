import axios from 'axios';

// for local development 
export const BASE_URL = "http://10.231.253.98:5000/api/";
export const ImageUrl = "http://10.231.253.98:5000/file/images/";
// export const BASE_URL = "http://localhost:5000/api/";
// export const ImageUrl = "http://localhost:5000/file/images/";


const TOKEN = localStorage.getItem("UserDetailToken");

console.log(TOKEN, 'TOKEN')

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:  {token: `Bearer ${TOKEN}`},
});