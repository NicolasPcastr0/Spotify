import React from "react";
import { assets, songsData } from "../assets/assets/assets";

const Player = () => {
  return (
    <div className="h-[10%] bg-[#000000] flex items-center justify-between text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} alt="" />
        <div className="flex flex-col">
          <h2 className="font-bold">{songsData[0].name}</h2>
          <p className="text-sm">{songsData[0].desc}</p>
        </div>
      </div>
      <div className="flex items-center flex-col gap-1 m-auto">
        <div className="flex gap-4">
            <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5 text-sm text-gray-400">
            <p> 0:00 </p>
            <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                <hr className="h-1 border-none w-0 bg-green-800 rounded-full" />
            </div>
            <p className="text-sm">{songsData[0].duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;