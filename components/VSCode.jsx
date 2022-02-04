/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { XIcon, MinusIcon } from "@heroicons/react/solid";
import {
  FolderIcon,
  ShareIcon,
  MenuAlt1Icon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import leegif from "../media/leegif.gif";
import Aos from "aos";
import "aos/dist/aos.css";

function VSCode() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [jsxIsActive, setjsxIsActive] = useState(true);
  const [txtIsActive, settxtIsActive] = useState(false);

  const openGit = () => {
    window.open("https://github.com/Davi15S", "_blank");
  };

  const changeWindow = () => {
    setjsxIsActive(!jsxIsActive);
    settxtIsActive(!txtIsActive);
  };

  return (
    <div>
      <div className="h-full w-full fixed bg-[#1e1e1e]" />
      <div className="text-white relative bg-[#3c3c3c] h-7 flex items-center justify-between z-30">
        <div className="flex h-full">
          <div className="flex items-center px-3">
            <Image
              objectFit="contain"
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
              }
              height={15}
              width={15}
            />
          </div>
          <div className="flex text-gray-400 text-sm cursor-default h-full overflow-scroll scrollbar-hide">
            <div className="hover:bg-[#505050] px-2 h-full flex items-center">
              <div>File</div>
            </div>
            <div className="hover:bg-[#505050] px-2 h-full flex items-center">
              <div>Edit</div>
            </div>
            <div className="hover:bg-[#505050] px-2 h-full flex items-center">
              <div>View</div>
            </div>
            <div className="hover:bg-[#505050] px-2 h-full flex items-center">
              <div>Go</div>
            </div>
            <div className="hover:bg-[#505050] px-2 h-full flex items-center">
              <div>Run</div>
            </div>
            <div className="hover:bg-[#505050] px-2 h-full flex items-center">
              <div>Help</div>
            </div>
          </div>
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
        <div
          onClick={() => setIsActive(!isActive)}
          className="h-12 flex items-center justify-center relative"
        >
          <FolderIcon className="h-7 text-gray-400 hover:text-white" />
        </div>
        <div
          onClick={openGit}
          className="h-12 flex items-center justify-center relative"
        >
          <ShareIcon className="h-7 text-gray-400 hover:text-white" />
        </div>
      </div>

      {isActive && (
        <div>
          <Explorer
            jsxIsActive={jsxIsActive}
            txtIsActive={txtIsActive}
            fun={changeWindow}
          />
        </div>
      )}

      <div
        onClick={changeWindow}
        className={!isActive ? "ml-12 navbar" : "ml-[15.5rem] navbar"}
      >
        <div
          className={
            jsxIsActive
              ? "flex items-center space-x-1 px-4 h-full bg-[#1e1e1e]"
              : "flex items-center space-x-1 px-4 h-full bg-[#2d2d2d]"
          }
        >
          <Image
            src={
              "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            }
            height={13}
            width={13}
            objectFit="contain"
          />
          <div className="text-[#e2b565] text-sm">AboutMe.jsx</div>
        </div>
        <div
          onClick={changeWindow}
          className={
            txtIsActive
              ? "flex items-center space-x-1 px-4 h-full bg-[#1e1e1e]"
              : "flex items-center space-x-1 px-4 h-full bg-[#2d2d2d]"
          }
        >
          <Image
            src={
              "https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png"
            }
            height={15}
            width={15}
            objectFit="contain"
          />
          <div className="text-[#e2b565] text-sm">contacts.css</div>
        </div>
      </div>

      <div
        className={
          !isActive ? "ml-12 relative" : "ml-[15.5rem] relative overflow-hidden"
        }
      >
        {jsxIsActive && <AboutMe isActive={isActive} />}
        {txtIsActive && <Contacts isActive={isActive} />}
      </div>

      <div className="fixed bottom-10 z-50 right-16">
        <Image src={leegif} height={200} width={400} objectFit="contain" />
      </div>
    </div>
  );
}

function Contacts({ isActive }) {
  useEffect(() => {
    Aos.init({ duration: 400 });
  });
  return (
    <div
      data-aos="fade-in"
      className={
        isActive
          ? "text-white left-10 pt-10 relative sm:p-14"
          : "text-white px-10 pt-10 relative sm:p-14"
      }
    >
      <div className="font-desktop text-gray-300">
        <div className="text-xl">{".contacts {"}</div>
        <div
          className={
            isActive
              ? "flex flex-col text-base pl-8 whitespace-nowrap overflow-hidden"
              : "flex flex-col text-base pl-8"
          }
        >
          <div>email: nguyenxd072@gmail.com</div>
          <div>phone-number: +420 775 513 632</div>
          <div>linkedin: www.linkedin.com/in/david-nguyen-5825a41b6/</div>
          <div>github.com/Davi15S</div>
        </div>
        <div className="text-xl">{"}"}</div>
      </div>
    </div>
  );
}

function AboutMe({ isActive }) {
  useEffect(() => {
    Aos.init({ duration: 400 });
  });
  return (
    <div
      data-aos="fade-in"
      className={
        isActive
          ? "text-white left-10 pt-10 relative sm:p-14"
          : "text-white px-10 pt-10 relative sm:p-14"
      }
    >
      <div className="whitespace-nowrap overflow-hidden mb-7 text-blue-400">
        {"<h1> "}
        <span className="text-3xl font-light font-desktop text-white">
          About Me
        </span>
        {" </h1>"}
      </div>
      <div className="flex flex-col space-y-2">
        <div
          className={
            isActive ? "whitespace-nowrap overflow-hidden text-xs" : "text-xs"
          }
        >
          <div className="text-blue-400">{"<div> "}</div>
          <div className="font-light text-lg font-desktop pl-5">
            My name is David Nguyen.
          </div>
          <div className="text-blue-400">{" </div>"}</div>
        </div>
        <div
          className={
            isActive ? "whitespace-nowrap overflow-hidden text-xs" : "text-xs"
          }
        >
          <div className="text-blue-400">{"<div> "}</div>
          <div className="font-light text-lg font-desktop pl-5">
            I am 18 years old.
          </div>
          <div className="text-blue-400">{" </div>"}</div>
        </div>
        <div
          className={
            isActive ? "whitespace-nowrap overflow-hidden text-xs" : "text-xs"
          }
        >
          <div className="text-blue-400">{"<div> "}</div>
          <div className="font-light text-lg font-desktop pl-5">
            I live in capital city of Czech Republic, Prague.
          </div>
          <div className="text-blue-400">{" </div>"}</div>
        </div>
      </div>
    </div>
  );
}

function Explorer({ jsxIsActive, txtIsActive, fun }) {
  return (
    <div className="fixed h-full w-[12.5rem] bg-[#252526] ml-12 ">
      <div className="text-gray-400 p-3 text-xs font-light">EXPLORER</div>
      <div className="flex flex-col space-y-1">
        <div className="flex text-white items-center px-1 text-xs space-x-1">
          <ChevronDownIcon className="h-4 w-4" />
          <div className="font-semibold">PORTFOLIO</div>
        </div>
        <div
          onClick={fun}
          className={
            jsxIsActive
              ? "flex space-x-2 px-3 items-center bg-[#37373d] py-1 cursor-default"
              : "flex space-x-2 px-3 items-center py-1 cursor-default"
          }
        >
          <Image
            src={
              "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            }
            height={15}
            width={15}
            objectFit="contain"
          />
          <div className="text-[#e2b565] text-sm">AboutMe.jsx</div>
        </div>
        <div
          onClick={fun}
          className={
            txtIsActive
              ? "flex space-x-2 px-3 items-center bg-[#37373d] py-1 cursor-default"
              : "flex space-x-2 px-3 items-center py-1 cursor-default"
          }
        >
          <Image
            src={
              "https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png"
            }
            height={13}
            width={13}
            objectFit="contain"
          />
          <div className="text-[#e2b565] text-sm">contacts.css</div>
        </div>
      </div>
    </div>
  );
}

export default VSCode;
