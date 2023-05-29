import React from "react";
import { apiFormat } from "@/pages/interfaces/interfaces";
export const ApiResultCard = (props: apiFormat) => {
  return (
    <div className="w-[650px] bg-slate-500">
      <div className="flex w-full p-2">
        <div className="flex gap-2">
          <span className="font-medium">
            country: <span className="font-semibold">{props.sys.country}</span>
          </span>
          <span className="font-medium">
            country: <span className="font-semibold">{props.sys.country}</span>
          </span>
        </div>

        <div className="flex flex-row gap-2">
          <div className="flex flex-col items-center justify-center">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
