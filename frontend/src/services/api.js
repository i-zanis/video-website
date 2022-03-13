import axios from 'axios';

export default () => {
  const axiosInstance = axios.create({
    baseURL: `${process.env.APP_URL}/api/v1`
  });

  const token = localStorage.getItem('token');
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  axiosInstance.interceptors.response.use(
    (res) => res,
    (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        location.reload();
      return Promise.reject(e);
    }
  );

  return axiosInstance;
}
