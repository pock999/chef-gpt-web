import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ChatListProps } from './chat-list-props.model';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';

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