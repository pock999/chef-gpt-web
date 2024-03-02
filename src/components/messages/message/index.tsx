import React, { FC } from "react";
import { cn } from "../../../libs/utils";
import {
  IconBolt,
  IconCaretDownFilled,
  IconCaretRightFilled,
  IconCircleFilled,
  IconFileText,
  IconMoodSmile,
  IconPencil,
  IconRobot,
  IconUser,
} from "@tabler/icons-react";

const ICON_SIZE = 32;

interface MessageProps {
  message: any;
  isLast: boolean;
}

export const Message: FC<MessageProps> = ({ message, isLast }) => {
  return (
    <div
      className={cn(
        "flex w-full justify-center",
        message.role === "user" ? "" : "bg-secondary"
      )}
    >
      <div className="relative flex w-[300px] flex-col py-6 sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
        <div className="space-y-3">
          {message.role === "ai" ? (
            <div className="flex items-center space-x-4">
              <IconRobot
                className="border-primary bg-primary text-secondary rounded border-[1px] p-1"
                size={ICON_SIZE}
              />

              <div className="text-lg font-semibold">AI</div>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <IconMoodSmile
                className="bg-primary text-secondary border-primary rounded border-[1px] p-1"
                size={ICON_SIZE}
              />
              <div className="text-lg font-semibold">User</div>
            </div>
          )}

          <div className="prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 min-w-full space-y-6 break-words">
            {message.content}
          </div>
        </div>
      </div>
    </div>
  );
};
