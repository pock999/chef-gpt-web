import React, { useEffect, useRef, useState } from 'react';
import { MessageListProps } from './message-list-props.model';
import { Message } from '../Message';

export function MessageList({messageList, responseProgress}: MessageListProps) {
  const [hasInit, setHasInit] = React.useState<boolean>(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    // 滾到最下面
    (messagesEndRef.current as any)?.scrollIntoView({ behavior: "smooth" });

    // 已經執行過一次
    if(!hasInit) {
      setHasInit(true);
    }

  }, [messageList, responseProgress]);

  const handleScroll = (evt) => {
    if(evt.currentTarget.scrollTop <= 30) {
      loadMore();
    }
  }

  const loadMore = () => {
    console.log('loadMore');
  };

  return (
    <div
      style={{
        flex: 1,
        paddingBottom: '2rem',
        height: 'calc(100vh - 250px)',
        width: '100%',
        overflow: 'auto'
      }}
      onScroll={handleScroll}
    >
      {
        messageList.map(message => (
          <Message {...message}/>
        ))
      }
      {
        responseProgress &&
        <Message
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