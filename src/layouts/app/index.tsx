import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import { Navbar } from '../../components';
import {
  Container
} from '@mui/material';
import {RoutesGuard} from '../../shared';
import { ChatRoom, ChatList } from '../../pages';
function Other() {
  return <>Other</>
}

export function AppLayout() {

  return (
    <>
      <Navbar title={'Chef-GPT'}/>
      <Container maxWidth={false} style={{
        padding: 0,
        paddingTop: '1rem',
        height: 'calc(100% - 87px)',
      }}>
        <Outlet/>
      </Container>
    </>
  );
}