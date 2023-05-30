import Link from "next/link";
import React, { ChangeEvent, SetStateAction, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export const NavBar = () => {
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
    <nav
      className="flex flex-col sm:flex-row h-20 bg-slate-400 w-full px-5 items-center sm:justify-around
    "
    >
      <Link href={`/`}>
        <span className="text-white text-3xl font-extrabold">
          WeatherApplication
        </span>
      </Link>
      <form className="relative" onSubmit={searchBarFormSubmission}>
        <input
          value={input}
          placeholder="EnterLocation"
          required
          id="searchBar"
          onChange={inputChange}
          className="h-8 w-56 rounded-md outline-none border pl-10 border-"
        />
        <button type="submit">
          <Image
            src={"icons8-search.svg"}
            alt=""
            width={20}
            height={20}
            className="absolute top-[6px] left-2"
          />
        </button>
      </form>
    </nav>
  );
};
