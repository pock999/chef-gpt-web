import React, { FC, useEffect, useRef, useState } from "react";
import { cn } from "../../../libs/utils";
import { ChatItem } from "../item";

interface SidebarDataListProps {
  data: any[];
}

export const SidebarDataList: FC<SidebarDataListProps> = ({ data }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (divRef.current) {
      setIsOverflowing(
        divRef.current.scrollHeight > divRef.current.clientHeight
      );
    }
  }, [data]);

  return (
    <>
      <div ref={divRef} className="mt-2 flex flex-col overflow-auto">
        {data.length === 0 && (
          <div className="flex grow flex-col items-center justify-center">
            <div className=" text-centertext-muted-foreground p-8 text-lg italic">
              沒有對話
            </div>
          </div>
        )}

        {data.length > 0 && (
          <div
            className={`h-full ${
              isOverflowing ? "w-[calc(100%-8px)]" : "w-full"
            } space-y-2 pt-2 ${isOverflowing ? "mr-2" : ""}`}
          >
            <div className="pb-2">
              {/* <div className="text-muted-foreground mb-1 text-sm font-bold">
                  {dateCategory}
                </div> */}
              <div className={cn("flex grow flex-col")}>
                {data.map((item: any) => (
                  <div key={item.id}>
                    <ChatItem key={item.id} chat={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={cn("flex grow")} />
    </>
  );
};
