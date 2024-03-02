import React, { FC, useState } from "react";
import { SidebarCreateButtons } from "../sidebar-create-button";
import { SidebarDataList } from "../sidebar-data-list";

interface SidebarContentProps {
  data: any[];
}

export const SidebarContent: FC<SidebarContentProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // const filteredData: any = data.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    // Subtract 50px for the height of the workspace settings
    <div className="flex max-h-[calc(100%-50px)] grow flex-col">
      <div className="mt-2 flex items-center">
        <SidebarCreateButtons hasData={data.length > 0} />
      </div>

      <div className="mt-2">
        {/* <SidebarSearch
          contentType={contentType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        /> */}
      </div>

      <SidebarDataList data={data} />
    </div>
  );
};
