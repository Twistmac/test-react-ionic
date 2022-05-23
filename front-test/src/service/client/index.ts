import {AxiosResponse} from "axios";

const axios = require('axios').default;
const urlApi = process.env.REACT_APP_API_URL

// get all cllient
export const getAllClient = () => {
    return axios.get(`${urlApi}/client/all-client`)
}