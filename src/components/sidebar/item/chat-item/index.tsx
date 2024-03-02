import React, { FC, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { cn } from "../../../../libs/utils";
import { IconRobotFace } from "@tabler/icons-react";
import { DeleteChat } from "../delete-chat";

interface ChatItemProps {
  chat: any;
}

export const ChatItem: FC<ChatItemProps> = ({ chat }) => {
  const navigate = useNavigate();
  const params = useParams();

  const isActive = `${params.id}` === `${chat.id}`;

  const itemRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    navigate(`/app/chat/${chat.id}`);
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
        "hover:bg-neutral-300 focus:bg-neutral-300 group flex w-full cursor-pointer items-center rounded p-2 hover:opacity-50 focus:outline-none",
        isActive && "bg-neutral-300"
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
        {chat.title}
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
