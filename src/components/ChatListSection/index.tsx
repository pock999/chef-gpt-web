import React from 'react';
import {
  Link,
} from 'react-router-dom';
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

export function ChatListSection({ chatList, selected }: ChatListProps) {

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto', maxHeight: 'calc(100% - 88px)', }}>
        {
          chatList.map(chatItem => (
            <>
              <ListItemButton
                alignItems="flex-start"
                selected={!!selected ? `${selected}`===`${chatItem.id}` : false}
                key={chatItem.id}
                component={Link}
                to={`/app/chat/${chatItem.id}`}
              >
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
                        { dayjs(chatItem.create_time).format('YYYY-MM-DD HH:mm:ss') }
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