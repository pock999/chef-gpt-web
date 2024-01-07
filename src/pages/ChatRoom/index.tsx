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
import { ChatListSection, MessageList } from '../../components';

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
          <Grid container spacing={1} sx={{ height: '100%', display: 'flex' }}>
            <Grid
              item
              xs={12}
              sx={{
                height: 'calc(100% - 120px)',
                width: '100%',
              }}
            >
              {
                !matchmdUp &&
                <Button variant="text" sx={{
                  position: 'fixed',
                  top: '0.5rem',
                  right: '0.5rem',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                }}>
                  <ArrowBackIcon/>
                </Button>
              }
              
              <MessageList
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
            <Grid
              item
              xs={12}
              sx={{
                height: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'row',
                borderTop: '1px solid #E0E0E0'
              }}
            >
              <TextField id="outlined-basic" variant="outlined" multiline maxRows={3} label="" sx={{
                width: 'calc(99% - 88px)',
                height: '100%'
              }} />
              <Button variant="contained" sx={{ width: '80px', marginLeft: '0.5rem', paddingTop: '1rem', paddingBottom: '1rem' }}>
                <SendIcon></SendIcon>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
