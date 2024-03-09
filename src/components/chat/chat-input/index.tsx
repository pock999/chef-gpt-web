import React, { FC, useRef, useState } from "react";
import { TextareaAutosize } from "../../ui";
import { IconSend } from "@tabler/icons-react";
import { cn } from "../../../libs/utils";
import { useNavigate, useParams } from "react-router";
import { useConversationStore, useMessageStore } from "../../../store";

interface ChatInputProps {
  scrollToBottom: () => void;
}

export const ChatInput: FC<ChatInputProps> = ({ scrollToBottom }) => {
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const {
    conversationList,
    listLoading,
    pagination,
    fetchConversationList,
    getTitle,
    currentConversation,
    createConversation,
  } = useConversationStore((state) => ({
    conversationList: state.conversationList,
    listLoading: state.listLoading,
    pagination: state.pagination,
    fetchConversationList: state.fetchConversationList,
    getTitle: state.getTitle,
    createConversation: state.createConversation,
    currentConversation: state.conversationList.find(
      (item) => `${item.id}` === `${id}`
    ),
  }));

  const {
    msgList,
    msgListLoading,
    msgPagination,
    postTempMessage,
    postMessage,
    fetchMessageList,
    isGenerating,
    setIsGenerating,
  } = useMessageStore((state) => ({
    msgList: state.msgList,
    msgListLoading: state.listLoading,
    msgPagination: state.pagination,
    postTempMessage: state.postTempMessage,
    postMessage: state.postMessage,
    fetchMessageList: state.fetchMessageList,
    isGenerating: state.isGenerating,
    setIsGenerating: state.setIsGenerating,
  }));

  const chatInputRef = useRef(null);
  const [userInput, setUserInput] = useState<string>("");
  const handleInputChange = (value: string) => {
    setUserInput(value);
  };

  const sendMessage = async (question: string) => {
    const temp = userInput;
    try {
      setUserInput("");
      setIsGenerating(true);

      if (typeof currentConversation !== "undefined") {
        postTempMessage(question);
        scrollToBottom();
        await postMessage(currentConversation.id, question);

        if (currentConversation?.title === null) {
          await getTitle(currentConversation.id);
        }

        scrollToBottom();
      } else {
        const id = await createConversation();
        await postMessage(id, question);
        await getTitle(id);
        navigate(`/app/chat/${id}`);
      }
    } catch (err) {
      console.log("err => ", err);
      setUserInput(temp);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyDown = async (event: React.KeyboardEvent) => {
    if (!isTyping && event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(userInput);
    }
  };

  return (
    <>
      <div className="flex flex-col flex-wrap justify-center gap-2">
        <div className="border-input relative mt-3 flex min-h-[60px] w-full items-center justify-center rounded-xl border-2">
          {/* <div className="absolute bottom-[76px] left-0 max-h-[300px] w-full overflow-auto rounded-xl dark:border-none">
            <ChatCommandInput />
          </div> */}
          <TextareaAutosize
            textareaRef={chatInputRef}
            className="ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring text-base flex w-full resize-none rounded-md border-none bg-transparent px-5 py-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={`請輸入`}
            onValueChange={handleInputChange}
            value={userInput}
            minRows={1}
            maxRows={18}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => setIsTyping(true)}
            onCompositionEnd={() => setIsTyping(false)}
          />
          <div className="absolute bottom-[14px] right-3 cursor-pointer hover:opacity-50">
            <IconSend
              className={cn(
                "bg-primary text-secondary rounded p-1",
                !userInput && "cursor-not-allowed opacity-50"
              )}
              onClick={() => {
                if (!isGenerating) {
                  if (!userInput) return;
                  sendMessage(userInput);
                }
              }}
              size={30}
            />
          </div>
        </div>
      </div>
    </>
  );
};
