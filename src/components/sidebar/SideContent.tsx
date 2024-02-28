import React, { FC, useState } from "react";
import { SidebarCreateButtons } from "./SidebarCreateButton";

interface SidebarContentProps {
  contentType: "chats";
  data: any[];
  folders: any[];
}

export const SidebarContent: FC<SidebarContentProps> = ({
  contentType,
  data,
  folders,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData: any = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Subtract 50px for the height of the workspace settings
    <div className="flex max-h-[calc(100%-50px)] grow flex-col">
      <div className="mt-2 flex items-center">
        <SidebarCreateButtons
          contentType={contentType}
          hasData={data.length > 0}
        />
      </div>

      <div className="mt-2">
        {/* <SidebarSearch
          contentType={contentType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        /> */}
      </div>

      {/* <SidebarDataList
        contentType={contentType}
        data={filteredData}
        folders={folders}
      /> */}
    </div>
  );
};
