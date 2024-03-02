import React, { FC } from "react";
import { Message } from "../../messages/message";

interface ChatMessagesProps {}

export const ChatMessages: FC<ChatMessagesProps> = ({}) => {
  const chatMessages: any[] = []; // TODO:

  return chatMessages.map((chatMessage, index, array) => (
    <Message
      key={chatMessage.id}
      message={chatMessage.message}
      isLast={index === array.length - 1}
    />
  ));
};
