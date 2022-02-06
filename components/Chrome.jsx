/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import {
  XIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  RefreshIcon,
  LockClosedIcon,
  DotsVerticalIcon,
  MinusIcon,
} from "@heroicons/react/solid";
import sasukenaruto from "../media/sasukenaruto.gif";
import { useRouter } from "next/router";

function Chrome() {
  const router = useRouter();

  const reloadPage = () => {
    window.location.reload(true);
  };

  return (
    <div className="h-screen bg-[#313131]">
      <div className="fixed w-full bg-black h-7 z-30 cursor-default">
        <div className="h-full flex justify-between">
          <div className="flex items-center px-3 space-x-2 bg-[#2d2d2d] h-full rounded-t-md ml-2 relative chrometab">
            <Image
              className="rounded-full"
              src={
                "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dtokjerhk1dxyludtlwc"
              }
              width={17}
              height={17}
              objectFit="contain"
            />
            <div className="text-white text-xs font-semibold">
              localhost:3000
            </div>
            <XIcon
              onClick={() => router.push("/desktop")}
              className="h-[23px] text-white hover:bg-[#3d3d3d] rounded-full p-1 transition-all duration-200"
            />
          </div>
          <div className="text-white flex items-center h-full">
            <div
              onClick={() => router.push("/desktop")}
              className="hover:bg-[#1a1a1a] h-full flex items-center w-12 justify-center"
            >
              <MinusIcon className="h-5" />
            </div>
            <div
              onClick={() => router.push("/desktop")}
              className="hover:bg-red-500 h-full flex items-center w-12 justify-center"
            >
              <XIcon className="h-5" />
            </div>
          </div>
        </div>
        <div className="h-12 bg-[#2d2d2d] text-white flex py-1">
          <div className="flex items-center h-full space-x-1 px-3">
            <ArrowLeftIcon
              onClick={() => router.push("/desktop")}
              className="h-7 hover:bg-[#3d3d3d] rounded-full p-1 transition-all duration-200"
            />
            <ArrowRightIcon className="h-7 hover:bg-[#3d3d3d] rounded-full p-1 transition-all duration-200 text-[#818282]" />
            <RefreshIcon
              onClick={reloadPage}
              className="h-7 hover:bg-[#3d3d3d] rounded-full p-1 transition-all duration-200"
            />
          </div>
          <div className="flex items-center my-1 w-full mr-2">
            <LockClosedIcon className="h-6 ml-2 absolute text-gray-300 hover:bg-[#525252] p-1 rounded-full transition-all duration-200" />
            <input
              type="text"
              value="localhost:3000"
              className="text-gray-200 border-none flex-shrink flex-grow outline-none w-full px-9 text-sm h-full rounded-full bg-[#3f3f3f] focus:outline-blue-400"
            />
          </div>
          <div className="flex items-center">
            <DotsVerticalIcon className="h-7 hover:bg-[#3d3d3d] rounded-full p-1 transition-all duration-200 mx-1 sm:mx-3" />
          </div>
        </div>
      </div>
      <div className="flex justify-center font-desktop font-bold text-4xl relative top-32 object-contain sm:text-6xl text-white">
        My projects:
      </div>
      <div className="fixed bottom-[0.2rem] right-0 z-50">
        <Image src={sasukenaruto} width={374} height={225} objectFit="contain" />
      </div>
    </div>
  );
}

export default Chrome;
