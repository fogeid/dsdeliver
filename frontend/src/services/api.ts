import axios from "axios";

const API_URL = "https://diegobatista-dsdeliver.herokuapp.com"

export function fetchProducts() {
    return axios(`${API_URL}/products`);
};