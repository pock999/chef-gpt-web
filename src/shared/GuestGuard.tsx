import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CONFIG } from '../config';

export function GuestGuard() {
  const isAuth = !!localStorage.getItem(CONFIG.tokenKey);

  return isAuth ? <Navigate to={"/app/chat"} /> : <Outlet/>;
}