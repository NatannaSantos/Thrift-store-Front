import axios from 'axios';

const BASE_URL = "https://thriftst.herokuapp.com";

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
function getProduct(id) {
    const promise = axios.get(`${BASE_URL}/product/${id}`);
    return promise;
}

function checkout(config){
    const promise = axios.post(`${BASE_URL}/checkout`, config);
    return promise;
}

const api = {
    login,
    register,
    products,
    getProduct,
    checkout
}
export default api;