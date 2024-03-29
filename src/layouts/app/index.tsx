import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import { Navbar } from '../../containers';
import {
  Container
} from '@mui/material';

export function AppLayout() {

  return (
    <>
      <Navbar title={'Chef-GPT'}/>
      <Container maxWidth={false} style={{
        padding: 0,
        paddingTop: '1rem',
        height: 'calc(100% - 80px)',
      }}>
        <Outlet/>
      </Container>
    </>
  );
}