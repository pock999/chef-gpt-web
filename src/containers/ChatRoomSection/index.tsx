import { Grid, Button, TextField, useTheme, useMediaQuery, Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MessageList } from '../MessageList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { ChatRoomProps } from './chat-room-props.model';

export function ChatRoomSection({
  messageList,
  loading,
  sendMessage,
  hasMore,
  conversationId,
  fetchMore
}: ChatRoomProps) {

  const [inputText, setInputText] = useState<string>('');
  const [aiLoading, setAiLoading] = useState<boolean>(false);

  const  [queryParams, setQueryParams] = useSearchParams(); 

  const theme = useTheme();
  const matchmdUp = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if(!!queryParams.get('firstInput')) {
      setInputText(queryParams.get('firstInput') as string);

      queryParams.delete('firstInput');
      setQueryParams(queryParams);
    }
  }, []);

  const enterInput = async () => {
    setAiLoading(true);
    setInputText('');
    await sendMessage(inputText);
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
            hasMore={hasMore}
            conversationId={conversationId}
            fetchMore={fetchMore}
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