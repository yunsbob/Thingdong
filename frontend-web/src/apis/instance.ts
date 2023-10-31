import axios, { Axios, AxiosError, AxiosResponse } from 'axios';

const instance: Axios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken') || undefined}`,
  },
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // TODO: 로그아웃 시키고 로그인 페이지로 이동
      localStorage.clear();
      // window.location.href = PATH.LOGIN;
    }
    return Promise.reject(error);
  }
);

export { instance };
