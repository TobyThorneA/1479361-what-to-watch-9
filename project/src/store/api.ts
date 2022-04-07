import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getDataUser } from '../services/token';

const BECKEND_URL = 'https://9.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = ():AxiosInstance => {
  const api = axios.create({
    baseURL: BECKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const dataUser = getDataUser();

      if (dataUser.token) {
        config.headers['x-token'] = dataUser.token;
      }

      return config;
    },
  );
  return api;
};
