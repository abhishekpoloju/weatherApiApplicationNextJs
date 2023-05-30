import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { apiFormat } from "./interfaces/interfaces";
import { ApiDataShow } from "@/components/ApiDataShow";
import Image from "next/image";
export const getServerSideProps: GetServerSideProps<{
  apiType: apiFormat;
}> = async (context) => {
  const { city } = context.query;
  city?.toString;

  const response =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric
    `);
  const apiType = await response.json();
  return {
    props: {
      apiType,
    },
  };
};
const Searching = ({
  apiType,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (apiType.cod === 200) {
    return (
      <div className="">
        <ApiDataShow {...apiType} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center h-[100vh-80px]">
        <Image
          src={"/NoDataFound.png"}
          alt=""
          width={400}
          height={400}
          className="m-10"
        />
        <p className="font-semibold text-xl">
          The particular location is not available in Api
        </p>
      </div>
    );
  }
};

export default Searching;
