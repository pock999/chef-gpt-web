import React, { FC } from "react";
import { Message } from "../../messages/message";
import { useMessageStore } from "../../../store";

interface ChatMessagesProps {}

export const ChatMessages: FC<ChatMessagesProps> = ({}) => {
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

  return msgList.map((chatMessage, index, array) => (
    <Message
      key={chatMessage.id}
      message={chatMessage}
      isLast={index === array.length - 1}
    />
  ));
};
