import axios, { AxiosInstance } from "axios";
export const Axios: AxiosInstance = axios.create({})



export const Api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com"
})