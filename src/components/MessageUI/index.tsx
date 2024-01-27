import React from 'react';
import { MessageUIProps } from './message-ui-props.model';
import {
  Avatar,
  Typography,
  Paper,
  CircularProgress
} from '@mui/material';

export function MessageUI({
  id,
  content,
  backgroundColor,
  role,
  avartarImg,
  progress
}: MessageUIProps) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: role === 'user' ? 'row-reverse' : 'row',
        justifyContent: 'flex-start',
        marginBottom: '0.5rem',
        paddingLeft: role === 'ai' ? '0.75rem' : 0,
        paddingRight: role === 'user' ? '1rem' : 0,
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
          display: 'flex',
          borderRadius: '0.75rem'
        }}
      >
        <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>{content}</Typography>
        {
          progress && <CircularProgress size={20} />
        }
      </Paper>
    </div>
  );
}