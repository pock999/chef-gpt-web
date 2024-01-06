import axios from "axios";
import { CONFIG } from '../config';

const http = axios.create({
  baseURL: CONFIG.apiUrl,
});

const setupInterceptors = history => {
  http.interceptors.response.use(res => {
    // success
    return res
  }, err => {
    const { status } = err.response
  
    if (status === 401) {
      // here we have access of the useHistory() from current Router
      localStorage.clear();
      history.push('/auth/login')
    }
  
    return Promise.reject(err)
  })
};

export { http, setupInterceptors };