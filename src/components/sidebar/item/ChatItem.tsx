import React, { FC, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { cn } from "../../../libs/utils";
import { IconRobotFace } from "@tabler/icons-react";
import { DeleteChat } from "./DeleteItem";

interface ChatItemProps {
  chat: any;
}

export const ChatItem: FC<ChatItemProps> = ({ chat }) => {
  const navigate = useNavigate();
  const params = useParams();

  // TODO: store / params
  // const isActive = params.chatid === chat.id || selectedChat?.id === chat.id;

  const isActive = params.chatid === chat.id;

  const itemRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    // TODO: goto
    // navigate();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      itemRef.current?.click();
    }
  };

  return (
    <div
      ref={itemRef}
      className={cn(
        "hover:bg-accent focus:bg-accent group flex w-full cursor-pointer items-center rounded p-2 hover:opacity-50 focus:outline-none",
        isActive && "bg-accent"
      )}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      <IconRobotFace
        className="bg-primary text-secondary border-primary rounded border-[1px] p-1"
        size={30}
      />

      <div className="ml-3 flex-1 truncate text-sm font-semibold">
        {chat.name}
      </div>

      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        className={`ml-2 flex space-x-2 ${
          !isActive && "w-11 opacity-0 group-hover:opacity-100"
        }`}
      >
        <DeleteChat chat={chat} />
      </div>
    </div>
  );
};
