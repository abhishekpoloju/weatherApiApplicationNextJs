import React from "react";
import { apiFormat } from "@/pages/interfaces/interfaces";
export const ApiResultCard = (props: apiFormat) => {
  return (
    <div className="w-[650px] flex flex-col border rounded">
      <div className="flex w-full px-4 py-2 justify-between items-center border">
        <div className="flex gap-2">
          <span className="">
            country: <span className="font-medium">{props.sys.country}</span>
          </span>
          <span className="">
            city: <span className="font-medium">{props.name}</span>
          </span>
        </div>

        <div className="flex flex-row gap-2">
          <div className="flex flex-col items-center justify-center">
            <span>sunrise</span>
            <span>{props.sys.sunrise}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>sunset</span>
            <span>{props.sys.sunset}</span>
          </div>
        </div>        
      </div>
      <div className="flex flex-row px-4 py-2 items-center justify-between border">
        <div className="flex flex-col items-center justify-center">
          <span>Temperature :</span>
          <span className="font-medium">{props.main.temp}&deg; F</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>min-temp :</span>
          <span className="font-medium">{props.main.temp_min}&deg; F</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>max-temp :</span>
          <span  className="font-medium">{props.main.temp_max}&deg; F</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>Humidity :</span>
          <span className="font-medium">{props.main.humidity} &#37;</span>
        </div>
      </div>
      <div className="flex flex-row px-4 py-2 items-center justify-between border">
      <div className="flex flex-col items-center justify-center">
          <span>Cloud Percentage:</span>
          <span className="font-medium">{props.clouds.all}</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>Rain Percentage:</span>
          <span className="font-medium"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>Wind speed :</span>
          <span  className="font-medium">{props.wind.speed}</span>
        </div>
      </div>
      <div>
        <span>{props.weather[0].icon}</span>
      </div>
    </div>
  );
};
