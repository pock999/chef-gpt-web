import React from 'react';
import { MessageProps } from './message-props.model';
import {
  Avatar,
  Typography,
  Paper
} from '@mui/material';

export function Message({
  message,
  backgroundColor,
  direction,
  avartarImg
}: MessageProps) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: direction === 'send' ? 'row-reverse' : 'row',
        justifyContent: 'flex-start',
        marginBottom: '0.5rem'
      }}
    >
      <Avatar alt={avartarImg} src={avartarImg} sx={{ m: 0.5 }} />
      <Paper
        variant="outlined"
        sx={{
          p: 1,
          backgroundColor,
          m: 0.5,
        }}
      >
        <Typography variant="body1">{message}</Typography>
      </Paper>
    </div>
  );
}