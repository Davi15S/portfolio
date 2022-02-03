/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import csgo_logo from "../media/csgo_logo.png";
import moment from "moment";

function MainPanel() {
  return (
    <div className="z-30 fixed bottom-0 left-0 w-full">
      <iframe className="top-[59px] left-4 sm:left-10  relative" src="https://giffiles.alphacoders.com/315/315.gif"></iframe>
      <div className="h-12 w-full bg-black flex items-center justify-between">
        <div className="hover:bg-[#2c2e31] h-full flex items-center w-12 justify-center">
          <Image
            src={
              "https://www.seekpng.com/png/full/26-264201_windows-10-logo-png-white-png-transparent-download.png"
            }
            height={18}
            width={18}
            objectFit="contain"
          />
        </div>
        <div className="h-full flex items-center">
          <div className="flex justify-center w-12 h-full relative hover:bg-[#2c2e31] mainpanel">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
              }
              height={22}
              width={22}
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center w-12 h-full relative hover:bg-[#2c2e31] mainpanel">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/2048px-Google_Chrome_icon_%28September_2014%29.svg.png"
              }
              height={22}
              width={22}
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center w-12 h-full relative hover:bg-[#2c2e31] mainpanel">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
              }
              height={22}
              width={22}
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center w-12 h-full relative hover:bg-[#2c2e31] mainpanel">
            <Image src={csgo_logo} height={22} width={22} objectFit="contain" />
          </div>
        </div>
        <div className="text-white text-xs h-full flex items-center hover:bg-[#2c2e31]">
          <div className="flex flex-col px-4 space-y-1 items-center">
            <div>{moment().format("LT")}</div>
            <div>{moment().format("l")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPanel;
