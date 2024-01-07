import axios from "axios";
import { CONFIG } from '../config';

const http = axios.create({
  baseURL: CONFIG.apiUrl,
});

const setupInterceptors = navigate => {
  http.interceptors.response.use(res => {
    // success
    return res
  }, err => {
    const { status } = err.response
  
    if (status === 401) {
      // here we have access of the useNavigate() from current Router
      localStorage.clear();
      navigate('/auth/login')
    }
  
    return Promise.reject(err)
  })
};

export { http, setupInterceptors };