import React, { ChangeEvent, useState } from "react";
import { apiFormat } from "@/pages/interfaces/interfaces";
import { useRouter } from "next/router";
import Image from "next/image";
export const ApiDataShow = (props: apiFormat) => {
  const obj = {
    Rain: "RainImage.png",
    Snow: "SnowImage.png",
    Clear: "ClearSkyImage.png",
    Clouds: "CloudyImage.png",
    Drizzle: "",
    Atmosphere: "SunnyImage.png",
    Thunder: "ThunderImage.png",
  };
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const searchBarFormSubmission = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value: string = e.currentTarget.elements
      .item(0)
      ?.getAttribute("value")!;
    if (value) {
      value.trim();
      router.push({
        pathname: "/searching",
        query: { city: value },
      });
    }
  };
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-between">
        <form className="relative" onSubmit={searchBarFormSubmission}>
          <input
            value={input}
            required
            id="searchBar"
            onChange={inputChange}
            className="rounded-md border border-black"
          />
          <button type="submit">
            <Image
              src={"icons8-search.svg"}
              alt=""
              width={20}
              height={20}
              className="absolute top-[1.5px] right-2"
            />
          </button>
        </form>
        <Image src={`/${obj.Rain}`} width={100} height={100} alt=""/>
        <p>{((props.main.temp)-32)*0.55}</p>
        <p>{new Date().toLocaleString()}</p>
        <div className="flex flex-col py-2">
          <p>{props.weather[0].description}-{props.weather[0].description}</p>
          <p>Rain-{/*props.rain["1h"]*/}&#37;</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
