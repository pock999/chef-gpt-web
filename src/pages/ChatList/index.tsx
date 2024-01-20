import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Grid,
  Divider,
  Button,
  Skeleton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { ChatListSection, EmptyChat } from '../../containers';

import { useConversationStore } from '../../store';

export function  ChatList() {

  const theme = useTheme();
  const matchmdUp = useMediaQuery(theme.breakpoints.up('md'));

  const navigate = useNavigate();

  const {
    conversationList,
    listLoading,
    pagination,
    fetchConversationList,
    createConversation
  } = useConversationStore((state) => ({ 
    conversationList: state.conversationList, 
    listLoading: state.listLoading,
    pagination: state.pagination,
    fetchConversationList: state.fetchConversationList,
    createConversation: state.createConversation,
  }));

  useEffect(() => {
    if(conversationList.length === 0) {
      fetchConversationList(true);
    }
  }, []);

  const startConversation = async () => {
    const id = await createConversation();
    navigate(`/app/chat/${id}`);
  };
  
  return (
    <>
      <Grid container spacing={1} sx={{ height: '100%' }}>
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
                selected={null}
                chatList={conversationList}
                showAddButton={false}
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
                  onClick={() => startConversation()}
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
        {
          matchmdUp && 
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
            <EmptyChat disabled={listLoading}/>
          </Grid>
        }
        
      </Grid>
    </>
  );
}