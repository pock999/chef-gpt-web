
import React from 'react';
import {
  Grid,
  Box,
  Button,
  TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export function EmptyChat() {
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
              <Button variant="contained" sx={{ width: '150px', height: '70px', fontSize: '24px'}}>開始聊天</Button>
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