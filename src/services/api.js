import axios from 'axios';

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function register(body) {
    const promise = axios.post(`${BASE_URL}/auth/register`, body);
    return promise;
}
function products() {
    const promise = axios.get(`${BASE_URL}/products`);
    return promise;
}

const api={
    login,
    register,
    products
}
export default api;