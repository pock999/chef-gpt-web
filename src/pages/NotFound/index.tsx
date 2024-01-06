import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Button, Container, Typography, Grid } from '@mui/material';

export function NotFound() {

  const theme = useTheme();
  const matchmdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <img
                src="https://cdni.iconscout.com/illustration/free/thumb/free-error-2103590-1768082.png"
                alt=""
                style={{
                  maxWidth: matchmdUp ? '500' : '100%',
                  maxHeight: matchmdUp ? '700' : 'auto',
                }}
              />
            </Grid>
            <Grid xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              {/* <Typography variant="h1">
                404
              </Typography> */}
              {/* <Typography variant="h6">
                沒有此頁面！！！
              </Typography> */}
              <Button variant="contained" >OK</Button>
            </Grid>
            
          </Grid>
        </Container>
      </Box>
    </>
  );
}