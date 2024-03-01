import React, { FC } from "react";
import { Button } from "../ui";
import { IconPlus } from "@tabler/icons-react";

interface SidebarCreateButtonsProps {
  contentType: "chats";
  hasData: boolean;
}

export const SidebarCreateButtons: FC<SidebarCreateButtonsProps> = ({
  contentType,
  hasData,
}) => {
  // TODO: 抽出
  const handleNewChat = async () => {};

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
