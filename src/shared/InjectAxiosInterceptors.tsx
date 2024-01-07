import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { setupInterceptors } from './http';

export function InjectAxiosInterceptors() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('inject axios interceptors');
    setupInterceptors(navigate);
  }, [navigate]);

  return null;
};