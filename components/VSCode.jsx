/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React, { useState } from "react";
import { XIcon, MinusIcon } from "@heroicons/react/solid";
import { FolderIcon, SearchIcon, ShareIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function VSCode() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const openGit = () => {
      window.open("https://github.com/Davi15S", "_blank")
  }

  return (
    <div>
      <div className="h-full w-full fixed bg-[#1e1e1e]" />
      <div className="text-white relative bg-[#3c3c3c] h-7 flex items-center justify-between z-30">
        <div className="pl-2 flex items-center">
          <Image
            objectFit="contain"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
            }
            height={15}
            width={15}
          />
        </div>

        <div className="h-full flex">
          <div
            onClick={() => router.push("/desktop")}
            className="flex items-center h-full hover:bg-[#505050] w-11 justify-center group"
          >
            <MinusIcon className="h-[20px] text-gray-400 group-hover:text-white" />
          </div>
          <div
            onClick={() => router.push("/desktop")}
            className="flex items-center h-full hover:bg-[#ff0000] w-11 justify-center group"
          >
            <XIcon className="h-[20px] text-gray-400 group-hover:text-white" />
          </div>
        </div>
      </div>
      <div className="text-white fixed bottom-0 bg-[#333333] w-12 h-full pt-7 flex flex-col z-10">
        <div onClick={() => setIsActive(!isActive)} className="h-12 flex items-center justify-center relative">
          <FolderIcon className="h-7 text-gray-400 hover:text-white" />
        </div>
        <div onClick={openGit} className="h-12 flex items-center justify-center relative">
          <ShareIcon className="h-7 text-gray-400 hover:text-white" />
        </div>
      </div>
      
      {isActive && <Explorer />}
    </div>
  );
}

function Explorer(){
    return(
        <div className="fixed h-full w-[12.5rem] bg-[#252526] ml-12 ">
            <div className="text-white p-3 text-sm font-semibold tracking-wider">
                EXPLORER
            </div>
        </div>
    )
}

export default VSCode;
