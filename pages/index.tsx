import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-[calc(100vh-80px)] w-full flex items-center justify-center"></div>

  );
}
