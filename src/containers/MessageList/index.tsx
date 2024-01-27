import React, { useEffect, useRef, useState } from 'react';
import { MessageListProps } from './message-list-props.model';
import {
  CircularProgress,
} from '@mui/material';
import { MessageUI } from '../../components/MessageUI';

export function MessageList({messageList, responseProgress, hasMore, conversationId, fetchMore}: MessageListProps) {
  const [hasInit, setHasInit] = React.useState<boolean>(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    // 滾到最下面
    (messagesEndRef.current as any)?.scrollIntoView({ behavior: "smooth" });

    // 已經執行過一次
    if(!hasInit) {
      setTimeout(() => {
        setHasInit(true);
      }, 1500);
    }

  }, [messageList, responseProgress]);

  const handleScroll = (evt) => {
    if(evt.currentTarget.scrollTop <= 30) {
      loadMore();
    }
  }

  const loadMore = async () => {
    if(hasMore) {
      await fetchMore(conversationId, false);
    }
  };

  return (
    <div
      style={{
        flex: 1,
        paddingBottom: '2rem',
        height: 'calc(100vh - 190px)',
        width: '100%',
        overflow: 'auto'
      }}
      onScroll={handleScroll}
    >
      {
        hasMore &&
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <CircularProgress />
        </div>
      }
      
      {
        messageList.map(message => (
          <MessageUI {...message}/>
        ))
      }
      {
        responseProgress &&
        <MessageUI
          id={-1}
          content="AI 輸入中..."
          role="ai"
          progress={responseProgress}
        />
      }
      <div ref={messagesEndRef} />
    </div>
  );
}