/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import csgo_logo from "../media/csgo-logo.png";
import { ArchiveIcon, ChartBarIcon, XCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { capitalize } from "lodash";
import NumberFormat from "react-number-format";

function CSGO({ inventory, profile, stats }) {
  const router = useRouter();

  const openProfile = () => {
    window.open(profile[0].profileurl, "_blank");
  };

  const textFormating = (text) => {
    const text1 = text.toString().replace("_", " ");
    const text2 = capitalize(text1);
    const text3 = text2.toString().replace("_", " ");

    return text3;
  };

  return (
    <div>
      <div className="bg-cover bg-nuke fixed h-full w-full bg-center scale-105 brightness-75 blur-sm" />
      <div className="fixed top-0 h-12 w-full bg-white bg-opacity-30 shadow-xl sm:h-full sm:w-16">
        <div className="flex items-center h-full sm:flex-col">
          <div className="px-4 border-r-[1px] border-white border-opacity-70 sm:mx-1 sm:px-1 sm:py-4 sm:border-b-[1px] sm:border-r-0">
            <Image
              src={csgo_logo}
              width={60}
              height={33.75}
              objectFit="contain"
            />
          </div>
          <div className="flex h-full items-center space-x-6 pl-6 text-white sm:flex-col sm:pl-0 sm:space-x-0 sm:space-y-4 sm:pt-6">
            <div className="opacity-70 hover:opacity-100">
              <ChartBarIcon className="h-[33.75px]" />
            </div>
            <div className="opacity-70 hover:opacity-100">
              <ArchiveIcon className="h-[33.75px]" />
            </div>
            <div
              onClick={() => router.push("/desktop")}
              className="opacity-70 hover:opacity-100 absolute right-4 sm:bottom-6"
            >
              <XCircleIcon className="h-[33.75px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative grid grid-cols-1 text-white top-12 sm:ml-16 lg:grid-cols-2">
        <div className="m-6 p-10 font-desktop text-2xl flex flex-col space-y-3 bg-white bg-opacity-20 rounded-md shadow-lg sm:m-10">
          <p>
            {
              "There is a hidden gamer in all of us. Some of us are playing single player games like Assassin's Creed or The Witcher."
            }
          </p>
          <p>
            {" "}
            I am also a player myself and i usually play competitive games.
          </p>
          <p>
            The competitiveness and cooperation are strongest part of myself.
            These types of games uses my abilities to fullest potential.
          </p>
        </div>
        <div className="m-2 p-10 flex flex-col space-y-16 xl:mx-20 sm:mx-6">
          <div className="flex flex-col space-y-10">
            <div
              onClick={openProfile}
              className="mx-auto hover:scale-105 duration-150 transition-all"
            >
              <Image
                className="rounded-3xl"
                src={profile[0].avatarfull}
                width={220}
                height={220}
              />
            </div>
            <div className="mx-auto text-3xl font-desktop">
              {profile[0].personaname}
            </div>
          </div>
          <div>
            <div className="font-desktop text-xl flex justify-between">
              <div>{textFormating(stats[0].name)}:</div>
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={stats[0].value}
                type="text"
                displayType="text"
                thousandSeparator={true}
              />
            </div>
            <div className="font-desktop text-xl flex justify-between">
              <div>{textFormating(stats[5].name)}:</div>
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={stats[5].value}
                type="text"
                displayType="text"
                thousandSeparator={true}
              />
            </div>
            <div className="font-desktop text-xl flex justify-between">
              <div>{textFormating(stats[6].name)}:</div>
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={stats[6].value}
                type="text"
                displayType="text"
                thousandSeparator={true}
              />
            </div>
            <div className="font-desktop text-xl flex justify-between">
              <div>{textFormating(stats[9].name)}:</div>
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={stats[9].value}
                type="text"
                displayType="text"
                thousandSeparator={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSGO;
