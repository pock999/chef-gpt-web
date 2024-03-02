import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../../layouts/loading";
import { ChatInput } from "../chat-input";
import { useScroll } from "../../../hooks";
import { ChatScrollButtons } from "../chat-scroll-buttons";

interface ChatUIProps {}

export const ChatUI: FC<ChatUIProps> = ({}) => {
  const params = useParams();

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
      // get chat
      // get message
      // scrollToBottom()
      // setIsAtBottom(true)
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

  const fetchMessages = async () => {
    // TODO:
  };
  const fetchChat = async () => {
    // TODO:
  };

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
          選擇的 Chat
        </div>
      </div>

      <div
        className="flex size-full flex-col overflow-auto border-b"
        onScroll={handleScroll}
      >
        <div ref={messagesStartRef} />
        {/* <ChatMessages /> */}
        <div ref={messagesEndRef} />
      </div>

      <div className="relative w-[300px] items-end pb-8 pt-5 sm:w-[400px] md:w-[500px] lg:w-[660px] xl:w-[800px]">
        <ChatInput />
      </div>
    </div>
  );
};
