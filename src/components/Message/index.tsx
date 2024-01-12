import React from 'react';
import { MessageProps } from './message-props.model';
import {
  Avatar,
  Typography,
  Paper
} from '@mui/material';

export function Message({
  id,
  content,
  backgroundColor,
  role,
  avartarImg
}: MessageProps) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: role === 'user' ? 'row-reverse' : 'row',
        justifyContent: 'flex-start',
        marginBottom: '0.5rem'
      }}
      key={id}
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
        <Typography variant="body1">{content}</Typography>
      </Paper>
    </div>
  );
}