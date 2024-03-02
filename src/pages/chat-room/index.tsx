import React, { useEffect, useState } from "react";
import { useConversationStore, useMessageStore } from "../../store";
import { useParams } from "react-router-dom";
import { Brand, ChatInput } from "../../components";
import { ChatUI } from "../../components/chat/chat-ui";

export function ChatRoom() {
  const { id } = useParams();

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
    currentConversation: state.conversationList.find(
      (item) => `${item.id}` === `${id}`
    ),
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
    if (typeof id !== "undefined") {
      if (conversationList.length === 0) {
        fetchConversationList(true);
      }
      fetchMessageList(id, true);
    }
  }, [id]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="text-4xl h-full">
        {msgList.length === 0 ? (
          <div className="relative flex h-full flex-col items-center justify-around">
            <div className="flex grow flex-col items-center justify-center" />

            <div className="top-50% left-50% -translate-x-50% -translate-y-50% absolute mb-20">
              <Brand />
            </div>

            <div className="w-[300px] pb-8 sm:w-[400px] md:w-[500px] lg:w-[660px] xl:w-[800px]">
              <ChatInput />
            </div>
          </div>
        ) : (
          <ChatUI />
        )}
      </div>
    </div>
  );
}
