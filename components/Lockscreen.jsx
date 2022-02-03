/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import moment from "moment";
import { useRouter } from "next/router";
import Image from "next/image";

function Lockscreen() {
  const router = useRouter();

  return (
    <div>
      <div className="bg-windows10_lockscreen fixed h-full w-full bg-center scale-105"></div>
      <div className="left-10 absolute bottom-36 flex flex-col space-y-3">
        <div className="text-white text-7xl font-light md:text-8xl">
          {moment().format("HH:mm")}
        </div>
        <div className="text-white flex text-3xl font-light md:text-4xl">
          <div>{moment().format("dddd")}</div>
          <div>{moment().format("[,] MMMM D")}</div>
        </div>
      </div>
      <div
        onClick={() => router.push("/lockscreenSignIn")}
        className="w-60 md:w-[20rem] h-24 bg-[#333435] hover:bg-[#3f3f3f] absolute bottom-5 right-6 cursor-pointer hover:scale-105 transition-all duration-200"
      >
        <div className="top-3 left-5 absolute text-white flex flex-col space-y-3">
          <div className="flex space-x-2 items-center">
            <Image
              src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png"
              height={20}
              width={20}
              objectFit="contain"
            />
            <p>Discord</p>
          </div>
          <p>Click here to continue...</p>
        </div>
      </div>
    </div>
  );
}

export default Lockscreen;
