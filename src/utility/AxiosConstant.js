import axios from "axios";
import Config from "./Config";

import 'react-toastify/dist/ReactToastify.css';

let url = Config.BASE_URL

const instance = axios.create({
    baseURL: url,
    params: {},
    data: {}
});
console.log('instance create', instance)
instance.interceptors.request.use((request) => {
    console.log('request', request)
    return request;
});
instance.interceptors.response.use((res) => {
    console.log('res interceptors', res)
    return res;
});
export default instance;