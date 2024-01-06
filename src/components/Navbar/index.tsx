import React from 'react';
import { NavbarProps } from './navbar-props.model';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import logo from '../../logo.svg';

export function Navbar({title}: NavbarProps) {
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
            <Grid item xs={10} sm={11} sx={{
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
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}