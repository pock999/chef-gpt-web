import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { setupInterceptors } from './http';

export function InjectAxiosInterceptors() {
  const history = useNavigate()

  useEffect(() => {
    console.log('inject axios interceptors');
    setupInterceptors(history);
  }, [history]);

  return null;
};