import { PATH } from '@/constants/path';
import axios, {
  Axios,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const instance: Axios = axios.create({
  //TODO: env 적용
  baseURL: `https://thingdong.com/api`,
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
      // TODO: 로그아웃 시키고 로그인 페이지로 이동
      localStorage.clear();
      window.location.href = PATH.LOGIN;
    }
    return Promise.reject(error);
  }
);

export { instance };
