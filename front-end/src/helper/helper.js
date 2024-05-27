
import Axios from "axios";
Axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_SERVER_DOMAIN;
export async function registerUser(credentials) {
    try {
        const { data: { msg }} = await Axios.post(`/api/register`, credentials);
        
        return Promise.resolve(msg);
    } catch (error) {
        return Promise.reject({ error });
    }
}
export async function loginverify(credentials) {
    try {
        const { data: { msg }} = await Axios.post(`/api/login`, credentials);
        return Promise.resolve(msg);
    } catch (error) {
        return Promise.reject({ error });

    }
}
