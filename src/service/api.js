import axios from "axios";
import { getItem } from "../helpers/persistens-storege";

axios.defaults.baseURL = 'https://api.realworld.io/api'

axios.interceptors.request.use(config =>{
   const token = getItem('token');
    const authOrization = token ? `Token ${token}` : ''
    config.headers.Authorization = authOrization
    return config
    console.log(config);

})


export default axios