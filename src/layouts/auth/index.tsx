import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container
} from '@mui/material';
import { Login, Register } from '../../pages';

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