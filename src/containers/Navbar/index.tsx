import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Button,
} from '@mui/material';

import { CONFIG } from '../../config';
import { AuthService } from '../../services';
import { NavbarProps } from './navbar-props.model';
import { TopbarUI } from '../../components';
// import logo from '../../logo.svg';

export function Navbar({title}: NavbarProps) {

  const isAuth = !!localStorage.getItem(CONFIG.tokenKey);

  const navigate = useNavigate();

  const logout = async () => {
    await AuthService.logout();
    navigate('/auth/login');
  }

  return (
    <>
      <TopbarUI title={title}>
        {
          isAuth &&
          <Button variant="outlined" onClick={() => logout()} style={{
            maxHeight: '70px',
          }}>登出</Button>
        }
      </TopbarUI>
    </>
  );
}