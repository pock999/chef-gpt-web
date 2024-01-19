import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Grid,
  Divider,
  Button,
  TextField,
  Skeleton,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ChatListSection, ChatRoomSection, MessageList } from '../../components';
import { useConversationStore, useMessageStore } from '../../store';
import { useParams } from 'react-router-dom';

export function  ChatRoom() {

  const theme = useTheme();
  const matchmdUp = useMediaQuery(theme.breakpoints.up('md'));

  const { id } = useParams();

  // TODO: 分頁
  const {
    conversationList,
    listLoading,
    pagination,
    fetchConversationList,
    getTitle,
    currentConversation,
  } = useConversationStore((state) => ({ 
    conversationList: state.conversationList, 
    listLoading: state.listLoading,
    pagination: state.pagination,
    fetchConversationList: state.fetchConversationList,
    getTitle: state.getTitle,
    currentConversation: state.conversationList.find(item => `${item.id}` === `${id}`),
  }));

  const {
    msgList,
    msgListLoading,
    msgPagination,
    postMessage,
    fetchMessageList,
  } = useMessageStore((state) => ({
    msgList: state.msgList,
    msgListLoading: state.listLoading,
    msgPagination: state.pagination,
    postMessage: state.postMessage,
    fetchMessageList: state.fetchMessageList,
  }));

  useEffect(() => {
    if(typeof id !== 'undefined') {
      if(conversationList.length === 0) {
        fetchConversationList(true);
      }
      fetchMessageList(id);
    }

  }, [id]);

  const sendMessage = async (question: string) => {
    if(typeof currentConversation !== 'undefined') {
      await postMessage(currentConversation.id, question);

      if(currentConversation?.title === null) {
        await getTitle(currentConversation.id);
      }
    }
  };
  
  return (
    <>
      <Grid container spacing={1} sx={{ height: '100%' }}>
        {
          matchmdUp &&
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={2}
            sx={{
              display: 'flex',
              alignContent: 'center',
            }}
          >
            {
              listLoading
              ?
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Skeleton variant="rounded" animation="wave" width={280} height={60}  />
                  <Skeleton variant="rounded" animation="wave" width={280} height={60} sx={{ mt: 1}} />
                  <Skeleton variant="rounded" animation="wave" width={280} height={60} sx={{ mt: 1}} />
                </div>
              :
              <>
                <ChatListSection
                  selected={id}
                  chatList={conversationList}
                  showAddButton={matchmdUp}
                  hasMore={pagination.totalCount > conversationList.length}
                />
                {
                  !matchmdUp &&
                  <Button aria-label="delete" size="large" style={{
                    position: 'fixed',
                    bottom: '1rem',
                    right: '1rem',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                  }}
                  variant="contained"
                  >
                    <AddIcon fontSize="inherit" />
                  </Button>
                }
              </>
            }
            {
              matchmdUp &&
              <Divider sx={{ marginLeft: '1rem' }} orientation="vertical" variant="middle" flexItem />
            }
          </Grid>
        }
        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          xl={10}
          sx={{
            display: 'flex',
            alignContent: 'center'
          }}
        >
          <ChatRoomSection
            messageList={msgList}
            sendMessage={sendMessage}
            loading={msgListLoading}
            hasMore={msgPagination.totalCount > msgList.length}
          />
        </Grid>
      </Grid>
    </>
  );
}
