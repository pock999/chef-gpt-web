import { Grid, Button, TextField, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import { MessageList } from '../MessageList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { ChatRoomProps } from './chat-room-props.model';

export function ChatRoomSection({ messageList }:ChatRoomProps) {

  const theme = useTheme();
  const matchmdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
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
            messageList={messageList}
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
    </>
  );
}