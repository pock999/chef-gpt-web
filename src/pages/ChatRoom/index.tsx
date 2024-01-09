import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Grid,
  Divider,
  Button,
  TextField,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ChatListSection, ChatRoomSection, MessageList } from '../../components';

export function  ChatRoom() {

  const theme = useTheme();
  const matchmdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Grid container spacing={1} sx={{ height: '100%' }}>
        {
          matchmdUp &&
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={2}
            sx={{
              display: 'flex',
              alignContent: 'center',
            }}
          >
            <ChatListSection
              chatList={[
                {
                  avatarImg: '/static/images/avatar/2.jpg',
                  title: '標題1',
                  dateTime: '2023-01-01 12:00:00'
                },
                {
                  avatarImg: '/static/images/avatar/3.jpg',
                  title: '標題2',
                  dateTime: '2023-01-01 11:00:00'
                },
                {
                  avatarImg: '/static/images/avatar/3.jpg',
                  title: '標題2',
                  dateTime: '2023-01-01 11:00:00'
                },
                {
                  avatarImg: '/static/images/avatar/3.jpg',
                  title: '標題2',
                  dateTime: '2023-01-01 11:00:00'
                },
                {
                  avatarImg: '/static/images/avatar/3.jpg',
                  title: '標題2',
                  dateTime: '2023-01-01 11:00:00'
                },
                {
                  avatarImg: '/static/images/avatar/3.jpg',
                  title: '標題2',
                  dateTime: '2023-01-01 11:00:00'
                },
                {
                  avatarImg: '/static/images/avatar/3.jpg',
                  title: '標題2',
                  dateTime: '2023-01-01 11:00:00'
                },
                {
                  avatarImg: '/static/images/avatar/3.jpg',
                  title: '標題2',
                  dateTime: '2023-01-01 11:00:00'
                },
                {
                  avatarImg: '/static/images/avatar/3.jpg',
                  title: '標題2',
                  dateTime: '2023-01-01 11:00:00'
                },
              ]}
            />
            {
              !matchmdUp &&
              <Button aria-label="delete" size="large" style={{
                position: 'fixed',
                bottom: '1rem',
                right: '1rem',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
              }}
              variant="contained"
              >
                <AddIcon fontSize="inherit" />
              </Button>
            }
            
            {
              matchmdUp &&
              <Divider sx={{ marginLeft: '1rem' }} orientation="vertical" variant="middle" flexItem />
            }
          </Grid>
        }
        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          xl={10}
          sx={{
            display: 'flex',
            alignContent: 'center'
          }}
        >
          <ChatRoomSection
            messageList={[
              {
                message: 'test',
                direction: 'receive',
              },
              {
                message: 'test2',
                direction: 'send',
              },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
}
