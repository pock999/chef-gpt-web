import React, { FC } from "react";
import { TabsContent } from "../../ui/tabs";
import { UI_CONFIG } from "../../../config";
import { SidebarContent } from "../sidebar-content";
import { useConversationStore } from "../../../store";

interface SidebarProps {
  showSidebar: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ showSidebar }) => {
  const {
    conversationList,
    listLoading,
    pagination,
    // fetchConversationList,
    createConversation,
  } = useConversationStore((state) => ({
    conversationList: state.conversationList,
    listLoading: state.listLoading,
    pagination: state.pagination,
    fetchConversationList: state.fetchConversationList,
    createConversation: state.createConversation,
  }));
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
      value="chats"
    >
      <div className="flex h-full flex-col p-3">
        <SidebarContent data={conversationList} />
      </div>
    </TabsContent>
  );
};
