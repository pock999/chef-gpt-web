import { Link } from "react-router-dom";
import React, { FC } from "react";
import { ChatbotUISVG } from "../icons/chatbotui-svg";

interface BrandProps {
  theme?: "dark" | "light";
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      to="https://www.chatbotui.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>

      <div className="text-4xl font-bold tracking-wide">Chatbot UI</div>
    </Link>
  );
};