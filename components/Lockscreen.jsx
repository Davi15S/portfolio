/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

function Lockscreen() {
  const router = useRouter();

  useEffect(() => {
    Aos.init();
  });

  return (
    <div>
      <div className="bg-windows10_lockscreen bg-cover fixed h-full w-full bg-center scale-105 brightness-75"/>
      <div className="px-10 absolute text-white font-desktop flex flex-col space-y-3 top-14 sm:px-16 sm:top-32">
        <div className="text-4xl sm:text-6xl">
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.typeString("Welcome to my portfolio.").start();
            }}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="3000"
          data-aos-duration="1000"
          className="text-sm sm:text-base"
        >
          For better experience press F11
        </div>
      </div>
      <div className="left-10 absolute bottom-44 sm:bottom-36 flex flex-col space-y-3 sm:left-16">
        <div className="text-white text-6xl font-light md:text-8xl">
          {moment().format("LT")}
        </div>
        <div className="text-white flex text-2xl font-light md:text-4xl">
          <div>{moment().format("dddd")}</div>
          <div>{moment().format("[,] MMMM D")}</div>
        </div>
      </div>
      <div
        data-aos="fade-in"
        data-aos-offset="-200"
        data-aos-delay="3000"
        data-aos-duration="1000"
      >
        <div
          onClick={() => router.push("/lockscreenSignIn")}
          className="w-60 md:w-[20rem] h-24 bg-[#333435] hover:bg-[#3f3f3f] hover:scale-105 transition-all duration-150 absolute bottom-5 right-6 cursor-pointer"
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
    </div>
  );
}

export default Lockscreen;
