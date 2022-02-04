/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import csgo_logo from "../media/csgo_logo.png";
import moment from "moment";
import { useRouter } from "next/router";

function MainPanel({ push }) {
  const router = useRouter();

  return (
    <div className="fixed z-50 bottom-0 left-0 w-full">
      <div className="h-12 w-full bg-black flex items-center justify-between">
        <div
          onClick={() => router.push("lockscreenSignOut")}
          className="hover:bg-[#2c2e31] h-full flex items-center w-12 justify-center"
        >
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
          <div
            onClick={() => router.push(push)}
            className="flex justify-center w-12 h-full relative hover:bg-[#2c2e31] mainpanel"
          >
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
          <div className="flex flex-col px-4 space-y-1 items-center cursor-default">
            <div>{moment().format("LT")}</div>
            <div>{moment().format("l")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPanel;
