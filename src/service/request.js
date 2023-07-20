import axios from "axios";

const request = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    timeout: 12400000,
    responseType: "json",
});

export default request;