
import React from 'react';
import {
  useNavigate,
} from 'react-router-dom';
import {
  Grid,
  Box,
  Button,
  TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useConversationStore } from '../../store';

export function EmptyChat({ disabled }: {disabled: boolean}) {
  const navigate = useNavigate();

  const {
    createConversation
  } = useConversationStore((state) => ({ 
    createConversation: state.createConversation,
  }));

  const startConversation = async () => {
    const id = await createConversation();
    navigate(`/app/chat/${id}`);
  }

  return (
    <>
      <Grid container spacing={1} sx={{ height: '100%', display: 'flex' }}>
        <Grid
          item
          xs={12}
          sx={{
            height: 'calc(100% - 120px)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
            <Box
              sx={{
                width: '95%',
                height: '95%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                sx={{ width: '150px', height: '70px', fontSize: '24px'}}
                disabled={disabled}
                onClick={() => startConversation()}
              >
                開始聊天
              </Button>
            </Box>
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
          }} disabled />
          <Button variant="contained" sx={{ width: '80px', marginLeft: '0.5rem', paddingTop: '1rem', paddingBottom: '1rem' }} disabled>
            <SendIcon></SendIcon>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}