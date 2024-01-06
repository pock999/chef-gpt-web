import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function GuestGuard() {
  const isAuth = !!localStorage.getItem('_token');

  return isAuth ? <Navigate to={"/app/chat"} /> : <Outlet/>;
}