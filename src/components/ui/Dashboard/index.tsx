import React, { FC, useState } from "react";
import { Button } from "../button";
import { UI_CONFIG } from "../../../config";
import { IconChevronCompactRight } from "@tabler/icons-react";
import { cn } from "../../../libs/utils";
import { Tabs } from "../tabs";
import { Sidebar } from "../../sidebar";

interface DashboardProps {
  children: React.ReactNode;
}

export const Dashboard: FC<DashboardProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(
    localStorage.getItem("_showSidebar") === "true"
  );

  const handleToggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
    localStorage.setItem("_showSidebar", String(!showSidebar));
  };

  return (
    <div className="flex size-full">
      <Button
        className={cn(
          "absolute left-[4px] top-[50%] z-10 size-[32px] cursor-pointer"
        )}
        style={{
          marginLeft: showSidebar ? `${UI_CONFIG.SIDEBAR_WIDTH}px` : "0px",
          transform: showSidebar ? "rotate(180deg)" : "rotate(0deg)",
        }}
        variant="ghost"
        size="icon"
        onClick={handleToggleSidebar}
      >
        <IconChevronCompactRight size={24} />
      </Button>

      <div
        className={cn("border-r-2 duration-200 border-neutral-200")}
        style={{
          // Sidebar
          minWidth: showSidebar ? `${UI_CONFIG.SIDEBAR_WIDTH}px` : "0px",
          maxWidth: showSidebar ? `${UI_CONFIG.SIDEBAR_WIDTH}px` : "0px",
          width: showSidebar ? `${UI_CONFIG.SIDEBAR_WIDTH}px` : "0px",
        }}
      >
        {showSidebar && (
          <Tabs
            className="flex h-full justify-center"
            value={"chats"}
            onValueChange={(tabValue) => {
              // setContentType(tabValue as ContentType)
              // router.replace(`${pathname}?tab=${tabValue}`)
            }}
          >
            <Sidebar showSidebar={showSidebar} />
          </Tabs>
        )}
      </div>

      <div className="bg-zinc-50 flex grow flex-col">{children}</div>
    </div>
  );
};
