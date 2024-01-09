import React from 'react';
import {
  List,
  ListItemButton,
  IconButton,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';

import { ChatListProps } from './chat-list-props.model';

export function ChatListSection({ chatList }: ChatListProps) {

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto', maxHeight: 'calc(100% - 88px)', }}>
        {
          chatList.map(chatItem => (
            <>
              <ListItemButton alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={chatItem.altString} src={chatItem.avatarImg} />
                </ListItemAvatar>
                <ListItemText
                  primary={chatItem.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        { dayjs(chatItem.dateTime).format('YYYY-MM-DD HH:mm:ss') }
                      </Typography>
                    </React.Fragment>
                  }
                />
                <IconButton aria-label="delete">
                  <CloseIcon/>
                </IconButton>
              </ListItemButton>
              <Divider variant="inset" component="li" />
            </>
          ))
        }
      </List>
    </>
  );
}