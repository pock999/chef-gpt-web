import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function RoutesGuard() {
  const isAuth = !!localStorage.getItem('_token');

  return isAuth ? <Outlet/> : <Navigate to={"/auth/login"} />;
}