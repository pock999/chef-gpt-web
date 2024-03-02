import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../../../ui/dialog";
import { IconTrash } from "@tabler/icons-react";
import React, { FC, useRef, useState } from "react";
import { Button } from "../../../ui";
import { DialogHeader, DialogFooter } from "../../../ui/dialog";

interface DeleteChatProps {
  chat: any;
}

export const DeleteChat: FC<DeleteChatProps> = ({ chat }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showChatDialog, setShowChatDialog] = useState(false);

  const handleDeleteChat = async () => {
    // TODO:
    // await deleteChat(chat.id)
    // setChats(prevState => prevState.filter(c => c.id !== chat.id))
    // setShowChatDialog(false)
    // handleNewChat()
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      buttonRef.current?.click();
    }
  };

  return (
    <Dialog open={showChatDialog} onOpenChange={setShowChatDialog}>
      <DialogTrigger asChild>
        <IconTrash className="hover:opacity-50" size={18} />
      </DialogTrigger>

      <DialogContent onKeyDown={handleKeyDown}>
        <DialogHeader>
          <DialogTitle>是否刪除 {chat.title}</DialogTitle>

          <DialogDescription>嘿 兄 dayˊ 不再考慮下嗎？</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="ghost" onClick={() => setShowChatDialog(false)}>
            行
          </Button>

          <Button
            ref={buttonRef}
            variant="destructive"
            onClick={handleDeleteChat}
          >
            刪吧
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
