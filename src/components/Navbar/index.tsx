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
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }} elevation={4}>
        <Toolbar variant="dense">
          <Grid container spacing={1}>
            <Grid
              item
              xs={2}
              sm={1}
              sx={{
                display: 'flex',
                alignContent: 'center'
              }}
            >
              <img src="https://influencermarketinghub.com/wp-content/uploads/2023/02/chatgpt-logo-02AFA704B5-seeklogo.com_.png" className="App-logo" alt="logo" style={{ width: '80px', height: 'auto' }} />
            </Grid> 
            <Grid item xs={8} sm={10} sx={{
              display: 'flex',
              alignContent: 'center'
            }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: '#010101',
                  textDecoration: 'none',
                  lineHeight: '80px'
                }}
              >
                { title }
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sm={1}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {
                isAuth &&
                <Button variant="outlined" onClick={() => logout()} style={{
                  maxHeight: '70px',
                }}>登出</Button>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}