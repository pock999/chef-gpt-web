import React from 'react';

import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import { TopbarUIProps } from './topbar-ui-props.model';
import { COLOR } from '../../config';

export function TopbarUI({left, title, children}: TopbarUIProps) {

  const theme = useTheme();
  const matchmdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: COLOR.grayScale[0] }} elevation={4}>
        <Toolbar variant="dense">
          <Grid container spacing={1}>
            {/* <Grid
              item
              xs={2}
              sm={1}
              sx={{
                display: 'flex',
                alignContent: 'center'
              }}
            >
              <img src="https://influencermarketinghub.com/wp-content/uploads/2023/02/chatgpt-logo-02AFA704B5-seeklogo.com_.png" className="App-logo" alt="logo" style={{ width: '80px', height: 'auto' }} />
            </Grid>  */}
            {
              !matchmdUp && 
              <Grid
                item
                xs={2}
                sx={{
                  display: 'flex',
                  alignContent: 'center'
                }}
              >
                { left }
              </Grid>
            }
            <Grid item xs={8} sm={10} sx={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: !matchmdUp ? 'center' : 'flex-start'
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
                  color: COLOR.grayScale[980],
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
              sm={2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
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