import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CONFIG } from '../config';

export function RoutesGuard() {
  const isAuth = !!localStorage.getItem(CONFIG.tokenKey);

  return isAuth ? <Outlet/> : <Navigate to={"/auth/login"} />;
}