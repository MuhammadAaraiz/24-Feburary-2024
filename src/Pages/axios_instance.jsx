import axios from "axios";

const axios_instatnce = axios.create({
    baseURL: "https://fakestoreapi.com/"
})
export { axios_instatnce }