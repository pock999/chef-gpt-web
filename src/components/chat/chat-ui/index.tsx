import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../../layouts/loading";
import { ChatInput } from "../chat-input";
import { useScroll } from "../../../hooks";
import { ChatScrollButtons } from "../chat-scroll-buttons";
import { ChatMessages } from "../chat-messages";
import { useConversationStore, useMessageStore } from "../../../store";
import BeatLoader from "react-spinners/BeatLoader";
import { cn } from "../../../libs/utils";
import { IconRobot } from "@tabler/icons-react";
import { UI_CONFIG } from "../../../config";

interface ChatUIProps {}

export const ChatUI: FC<ChatUIProps> = ({}) => {
  const params = useParams();

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
    isGenerating,
  } = useMessageStore((state) => ({
    msgList: state.msgList,
    msgListLoading: state.listLoading,
    msgPagination: state.pagination,
    postMessage: state.postMessage,
    fetchMessageList: state.fetchMessageList,
    isGenerating: state.isGenerating,
  }));

  const [loading, setLoading] = useState(true);
  // const { handleNewChat, handleFocusChatInput } = useChatHandler()

  const {
    messagesStartRef,
    messagesEndRef,
    handleScroll,
    scrollToBottom,
    setIsAtBottom,
    isAtTop,
    isAtBottom,
    isOverflowing,
    scrollToTop,
  } = useScroll();

  useEffect(() => {
    const fetchData = async () => {
      scrollToBottom();
      setIsAtBottom(true);
    };

    if (params.id) {
      fetchData().then(() => {
        // handleFocusChatInput()
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="relative flex h-full flex-col items-center">
      <div className="absolute left-4 top-2.5 flex justify-center">
        <ChatScrollButtons
          isAtTop={isAtTop}
          isAtBottom={isAtBottom}
          isOverflowing={isOverflowing}
          scrollToTop={scrollToTop}
          scrollToBottom={scrollToBottom}
        />
      </div>

      <div className="absolute right-4 top-1 flex h-[40px] items-center space-x-2">
        {/* <ChatSecondaryButtons /> */}
      </div>

      <div className="bg-secondary flex max-h-[50px] min-h-[50px] w-full items-center justify-center border-b-2 px-20 font-bold">
        <div className="max-w-[300px] truncate sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
          {/* {selectedChat?.name || "Chat"} */}
          {currentConversation?.title || "Chat"}
        </div>
      </div>

      <div
        className="flex size-full flex-col overflow-auto border-b"
        onScroll={handleScroll}
      >
        <div ref={messagesStartRef} />
        <ChatMessages />
        {isGenerating && (
          <>
            <div className="flex w-full justify-center bg-secondary">
              <div className="relative flex w-[300px] flex-col py-6 sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <IconRobot
                      className="border-primary bg-primary text-secondary rounded border-[1px] p-1"
                      size={UI_CONFIG.ICON_SIZE}
                    />
                    <div className="text-lg font-semibold">AI</div>
                  </div>
                  <div className="prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 min-w-full space-y-6 break-words">
                    <BeatLoader color="#575757" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="relative w-[300px] items-end pb-8 pt-5 sm:w-[400px] md:w-[500px] lg:w-[660px] xl:w-[800px]">
        <ChatInput scrollToBottom={() => scrollToBottom()} />
      </div>
    </div>
  );
};
