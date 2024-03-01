import React, { useRef, useState } from "react";
import { TextareaAutosize } from "../../ui";
import { IconSend } from "@tabler/icons-react";
import { cn } from "../../../libs/utils";

export function ChatInput() {
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const chatInputRef = useRef(null);
  const [userInput, setUserInput] = useState<string>("");
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const handleInputChange = (value: string) => {
    setUserInput(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isTyping && event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      // TODO: send
      // handleSendMessage(userInput, chatMessages, false)
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
            className="ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring text-md flex w-full resize-none rounded-md border-none bg-transparent px-14 py-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
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
                if (aiLoading) {
                  console.log("fsdfds");
                  if (!userInput) return;
                  // handleSendMessage(userInput, chatMessages, false)
                }
              }}
              size={30}
            />
          </div>
        </div>
      </div>
    </>
  );
}
