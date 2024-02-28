import React, { FC } from "react";
import { TabsContent } from "../ui/Tabs";
import { UI_CONFIG } from "../../config";
import { SidebarContent } from "./SideContent";

interface SidebarProps {
  showSidebar: boolean;
  contentType: "chats";
}

export const Sidebar: FC<SidebarProps> = ({ showSidebar, contentType }) => {
  const data: any[] = [];
  const folders: any[] = [];

  return (
    <TabsContent
      className="m-0 w-full space-y-2"
      style={{
        // Sidebar - SidebarSwitcher
        minWidth: showSidebar
          ? `calc(${UI_CONFIG.SIDEBAR_WIDTH}px - 60px)`
          : "0px",
        maxWidth: showSidebar
          ? `calc(${UI_CONFIG.SIDEBAR_WIDTH}px - 60px)`
          : "0px",
        width: showSidebar
          ? `calc(${UI_CONFIG.SIDEBAR_WIDTH}px - 60px)`
          : "0px",
      }}
      value={contentType}
    >
      <div className="flex h-full flex-col p-3">
        <SidebarContent
          contentType={contentType}
          data={data}
          folders={folders}
        />
      </div>
    </TabsContent>
  );
};
