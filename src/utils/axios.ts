import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import config from 'config';

const axiosConfig: AxiosRequestConfig = {
  baseURL: config.API_PREFIX,
  timeout: 30000,
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);

export {
  axiosInstance,
};
