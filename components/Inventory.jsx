/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import {
  ChartBarIcon,
  ArchiveIcon,
  XCircleIcon,
  BookmarkIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import csgo_logo from "../media/csgo-logo.png";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setactive } from "../redux/itemIsActive";
import { setItemInfoList, removeFromList } from "../redux/itemList";

function Inventory({ inventory, assets }) {
  const router = useRouter();
  const itemList = useSelector((state) => state.itemList.items);
  const size = useWindowSize();
  const [inventoryDetailsActive, setInventoryDetailsActive] = useState(false)

  return (
    <div>
      <div className="bg-cover bg-nuke fixed h-full w-full bg-center scale-105 brightness-75 blur-sm" />
      <div className="fixed top-0 h-12 w-full bg-white bg-opacity-30 shadow-xl sm:h-full sm:w-16 z-50">
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
              <ChartBarIcon
                onClick={() => router.push("/csgo")}
                className="h-[33.75px]"
              />
            </div>
            <div className="opacity-70 hover:opacity-100">
              <ArchiveIcon className="h-[33.75px]" />
            </div>
            <div onClick={() => setInventoryDetailsActive(!inventoryDetailsActive)} className="opacity-70 hover:opacity-100 lg:hidden relative">
              <BookmarkIcon className="h-[33.75px]" />
              <div className="absolute top-1 left-[0.8rem] text-black font-bold">
                {itemList.length}
              </div>
            </div>
            <div>
              {size.width}px / {size.height}px
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
      {inventoryDetailsActive == false && <CSGOInventory inventory={inventory} assets={assets} />}
      {inventoryDetailsActive == true && <CSGOInventoryDetails />}
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function CSGOInventory({ inventory, assets }) {
  const [inventoryItems, setinventoryItems] = useState([]);
  const size = useWindowSize();

  const itemIsActive = useSelector((state) => state.itemIsActive.value);
  const itemList = useSelector((state) => state.itemList.items);
  const dispatch = useDispatch();
  if (itemList.length === 0) {
    dispatch(setactive(false));
  }

  useEffect(() => {
    for (let i = 0; i < assets.length; i++) {
      for (let j = 0; j < inventory.length; j++) {
        if (assets[i].classid == inventory[j].classid) {
          const obj = Object.assign(assets[i], inventory[j]);
          setinventoryItems((inventoryItems) => [...inventoryItems, obj]);
        }
      }
    }
  }, []);

  return (
    <div className="text-white absolute sm:ml-16 top-12 pb-12">
      <div
        className={
          !itemIsActive
            ? "grid grid-cols-1 justify-items-center w-full"
            : "grid lg:grid-cols-5"
        }
      >
        <div className="p-6 flex flex-wrap justify-center justify-items-center gap-4 col-span-4">
          {inventoryItems.map((item, i) => (
            <InventoryItem
              key={i}
              name={item.name}
              name_color={item.name_color}
              image={item.icon_url_large || item.icon_url}
              inspect={item.actions ? item.actions : ""}
              assetid={item.assetid}
              item={item}
            />
          ))}
        </div>
        {itemIsActive && size.width >= 1024 && <ItemInfo />}
      </div>
    </div>
  );
}

function CSGOInventoryDetails({inventory}){
  const itemList = useSelector((state) => state.itemList.items);
  
  return(
    <div className="relative">
      <div className="pt-12">
        {itemList.length === 0 ? "There are no items to look at." : "Items to look at."}
      </div>
    </div>
  )
}

function InventoryItem({ name, image, inspect, assetid, item }) {
  const [itemInfo, setItemInfo] = useState(false);
  const InspectLink = (link, assteid) => {
    const link1 = link
      .toString()
      .replace("%owner_steamid%", "76561198302654445");
    const link2 = link1.toString().replace("%assetid%", assteid);

    return link2;
  };

  const dispatch = useDispatch();

  const setiteminfo = () => {
    if (itemInfo) {
      dispatch(removeFromList(item));
    }

    if (!itemInfo) {
      dispatch(setItemInfoList(item));
    }

    dispatch(setactive(true));
    setItemInfo(!itemInfo);
  };

  return (
    <div
      onClick={setiteminfo}
      className={
        itemInfo
          ? "font-desktop flex flex-col items-center w-full max-w-[15rem] bg-gray-700 bg-opacity-40 transition-all duration-200"
          : "bg-white bg-opacity-30 font-desktop flex flex-col items-center w-full max-w-[15rem] hover:bg-gray-300 hover:bg-opacity-30 transition-all duration-200"
      }
    >
      <div className="flex items-center flex-col w-full">
        <div
          className={`w-3/4 mx-auto py-4 flex justify-center text-lg h-[6rem]`}
        >
          <div className={`line-clamp-2 text-center z-30`}>{name}</div>
        </div>
        <div className="p-4 z-10 mb-4">
          <Image
            src={`https://community.akamai.steamstatic.com/economy/image/${image}`}
            width={120}
            height={120}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

function ItemInfo() {
  const itemList = useSelector((state) => state.itemList.items);
  console.log(itemList);
  return (
    <div className="relative">
      {itemList.map((item, i) => (
        <div key={i}>{item.name}</div>
      ))}
    </div>
  );
}

export default Inventory;
