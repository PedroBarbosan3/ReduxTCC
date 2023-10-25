import axios from 'axios';
import environment from '../environment';

const api = axios.create({});
export default api;


api.interceptors.request.use(async (config: any) => {
    config.baseURL = environment.baseURL;
    return config;
});

export const getAuthHeaders = (): any => {
    var authenticateStateStorage = sessionStorage.getItem("persist:authenticate") ? JSON.parse(sessionStorage.getItem("persist:authenticate")!) : undefined;
    var token = JSON.parse(authenticateStateStorage.entity)
    return {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token.access_token
        }
    }
}