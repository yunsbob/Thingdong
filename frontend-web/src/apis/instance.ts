import { PATH } from '@/constants/path';
import axios, {
  Axios,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const instance: Axios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  // (config: AxiosRequestConfig) => {
  (config: any) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };
    return config;
  },
  (error: AxiosError | Error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.log(error.response?.status);
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = PATH.LOGIN;
    }
    return Promise.reject(error);
  }
);

const thingsInstance: Axios = axios.create({
  baseURL: `${process.env.REACT_APP_THINGS_URL}`,
  withCredentials: true,
  headers: {
    'Content-Type': `application/json`,
  },
});

thingsInstance.interceptors.request.use(
  (config: any) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      installedappid: localStorage.getItem('installedAppId'),
      // 'Access-Control-Allow-Origin': `http://localhost:3000`,
      // 'Access-Control-Allow-Credentials': 'true',
    };
    return config;
  },
  (error: AxiosError | Error) => {
    return Promise.reject(error);
  }
);

thingsInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.log(error.response?.status);
    // if (error.response?.status === 401) {
    //   localStorage.clear();
    //   window.location.href = PATH.LOGIN;
    // }
    return Promise.reject(error);
  }
);

export { instance, thingsInstance };
