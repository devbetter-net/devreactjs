import Axios, { InternalAxiosRequestConfig } from "axios";
import storage from '@/utils/storage';
import { API_URL } from '@/config';

export const axios = Axios.create({
    baseURL: API_URL,
});
//request
axios.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    const token = storage.getToken();
    if (token) {
        config.headers.authorization = `${token}`;
    }
    config.headers.Accept = 'application/json';
    return config;
}, (error) => {
    return Promise.reject(error);
});
//response
axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        // useNotificationStore.getState().addNotification({
        //     type: 'error',
        //     title: 'Error',
        //     message,
        // });
        console.log(message);
        return Promise.reject(error);
    }
);