import React, { useRef } from 'react';
import {
  Link, useNavigate,
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
  ListItemIcon,
  Dialog,
  Slide,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import LoopIcon from '@mui/icons-material/Loop';
import dayjs from 'dayjs';

import { ChatListProps } from './chat-list-props.model';
import { useConversationStore } from '../../store';
import { Snackbar } from '../../shared';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ChatListSection({ chatList, selected, showAddButton, hasMore }: ChatListProps) {
  const [openConfirm, setOpenConfrim] = React.useState<boolean>(false);
  const [currentConversationId, setCurrentConversationId] = React.useState<number>(0);
  const navigate = useNavigate();

  const {
    createConversation,
    deleteConversation,
  } = useConversationStore((state) => ({ 
    createConversation: state.createConversation,
    deleteConversation: state.deleteConversation,
  }));

  const startConversation = async () => {
    const id = await createConversation();
    navigate(`/app/chat/${id}`);
  };

  const deleteConfirm = async (evt, chatId: number) => {
    evt.preventDefault();
    setCurrentConversationId(chatId);
    setOpenConfrim(true);
  };

  const deleteChat = async () => {
    if(currentConversationId !== 0) {
      await deleteConversation(currentConversationId);

      setCurrentConversationId(0);
      Snackbar.success('刪除成功');
    }
    handleClose();
  };

  const handleClose = async () => {
    setOpenConfrim(false);
  }

  const scrollRef = useRef(null);

  const handleScroll = async (evt) => {
    if(evt.currentTarget.scrollHeight - evt.currentTarget.scrollTop - 30 < (scrollRef.current as any).clientHeight) {
      if(hasMore) {
        // TODO: load 更多對話列表，目前第一次全 load ，暫時不需要所以
      }
    }
    
  }

  return (
    <>
      <Dialog
        open={openConfirm}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"確定要刪除此對話"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            不考慮下嗎？哥
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={() => deleteChat()}>確認</Button>
        </DialogActions>
      </Dialog>
      <div
        style={{
          overflow: 'auto',
          maxHeight: 'calc(100vh - 110px)',
          width: '100%',
        }}
        ref={scrollRef}
        onScroll={handleScroll}
      >
        <List sx={{ width: '100%', bgcolor: 'background.paper', height: '100%', }}>
          {
            showAddButton &&
            <ListItemButton
              alignItems="center"
              onClick={() => startConversation()}
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="開始新對話" />
            </ListItemButton>
          }
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
                    primary={(chatItem.title === null || chatItem.title === '' || chatItem.title == undefined) ? '未命名的對話' : chatItem.title}
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
                  <IconButton aria-label="delete" onClick={(evt) => deleteConfirm(evt, chatItem.id)}>
                    <CloseIcon/>
                  </IconButton>
                </ListItemButton>
                <Divider variant="inset" component="li" />
              </>
            ))
          }
          {
            hasMore
            &&
            <ListItemButton
              alignItems="center"
              sx={{ display: 'flex', justifyContent: 'center'}}
            >
              <CircularProgress />
            </ListItemButton>
          }
            
        </List>
      </div>
      
    </>
  );
}