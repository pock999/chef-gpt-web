import React from 'react';
import { MessageListProps } from './message-list-props.model';
import { Message } from '../Message';

export function MessageList({messageList}: MessageListProps) {
  return (
    <div
      style={{
        flex: 1
      }}
    >
      {
        messageList.map(message => (
          <Message {...message}/>
        ))
      }
    </div>
  );
}