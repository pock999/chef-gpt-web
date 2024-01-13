import React from 'react';
import { MessageListProps } from './message-list-props.model';
import { Message } from '../Message';

export function MessageList({messageList, responseProgress}: MessageListProps) {
  return (
    <div
      style={{
        flex: 1,
        paddingBottom: '2rem'
      }}
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
      
      
    </div>
  );
}