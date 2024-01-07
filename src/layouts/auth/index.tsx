import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container
} from '@mui/material';

export function AuthLayout() {

  return (
    <>
      <Container maxWidth={false} style={{
        padding: 0,
        marginTop: '-2rem',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Outlet/>
      </Container>
    </>
  );
}