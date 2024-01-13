import { Grid, Button, TextField, useTheme, useMediaQuery, Paper } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageList } from '../MessageList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { ChatRoomProps } from './chat-room-props.model';

export function ChatRoomSection({ messageList, loading, sendMessage }: ChatRoomProps) {

  const [inputText, setInputText] = useState<string>('');
  const [aiLoading, setAiLoading] = useState<boolean>(false);

  const theme = useTheme();
  const matchmdUp = useMediaQuery(theme.breakpoints.up('md'));

  const enterInput = async () => {
    setAiLoading(true);
    await sendMessage(inputText);
    setInputText('');
    setAiLoading(false);
  };

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
            <Link to="/app/chat">
              <Button variant="contained" sx={{
                position: 'fixed',
                top: 'calc(0.5rem + 87px)',
                left: '0.5rem',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                zIndex: 5,
              }}>
                <ArrowBackIcon/>
              </Button>
            </Link>
          }
          
          <MessageList
            messageList={messageList}
            responseProgress={aiLoading}
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
          <TextField
            id="outlined-basic"
            variant="outlined"
            multiline
            maxRows={3}
            label=""
            sx={{
              width: 'calc(99% - 88px)',
              height: '100%'
            }}
            value={inputText}
            onChange={(evt) => setInputText(evt.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              width: '80px',
              marginLeft: '0.5rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }}
            disabled={!inputText}
            onClick={() => enterInput()}
          >
            <SendIcon></SendIcon>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}