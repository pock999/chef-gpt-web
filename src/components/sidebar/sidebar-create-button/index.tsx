import React, { FC } from "react";
import { Button } from "../../ui";
import { IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { useConversationStore } from "../../../store";

interface SidebarCreateButtonsProps {
  hasData: boolean;
}

export const SidebarCreateButtons: FC<SidebarCreateButtonsProps> = ({
  hasData,
}) => {
  const navigate = useNavigate();

  const { getTitle, createConversation } = useConversationStore((state) => ({
    getTitle: state.getTitle,
    createConversation: state.createConversation,
  }));

  const handleNewChat = async () => {
    const id = await createConversation();
    navigate(`/app/chat/${id}`);
  };

  return (
    <div className="flex w-full space-x-2 ">
      <Button
        className="flex h-[36px] grow bg-neutral-900 text-white"
        onClick={() => handleNewChat()}
      >
        <IconPlus className="mr-1" size={20} />
        New Chats
      </Button>
    </div>
  );
};
