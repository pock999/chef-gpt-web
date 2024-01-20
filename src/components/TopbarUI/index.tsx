import React from 'react';

import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Button,
} from '@mui/material';

import { TopbarUIProps } from './topbar-ui-props.model';

export function TopbarUI({title, children}: TopbarUIProps) {
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
                children
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}