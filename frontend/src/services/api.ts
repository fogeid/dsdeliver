import axios from "axios";

const API_URL = 'https://diegobatista-dsdeliver.herokuapp.com'
const mapboxToken = process.env.REACT_APP_ACESS_TOKEN_MAP_BOX;

export function fetchProducts() {
    return axios(`${API_URL}/products`);
    // console.log(axios);
};

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}