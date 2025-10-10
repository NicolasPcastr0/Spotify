import React, { useContext } from "react";
import { assets } from "../assets/assets/assets";
import PlayerContext from "../context/PlayerContext";

const Player = () => {

  const {track, seekBg, seekBar, playStatus, play, pause} = useContext(PlayerContext);


  return (
    <div className="h-[10%] bg-[#000000] flex items-center justify-between text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div className="flex flex-col">
          <h2 className="font-bold">{track.name}</h2>
          <p className="text-sm">{track.desc}</p>
        </div>
      </div>
      <div className="flex items-center flex-col gap-1 m-auto">
        <div className="flex gap-4">
            <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
            {playStatus ? (
              <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="" />
            ) : (
              <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
            )}
            <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5 text-sm text-gray-400">
            <p> 0:00 </p>
            <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
            </div>
            <p className="text-sm">{track.duration}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="" />
        <div className="bg-green-800 rounded-full w-20 h-1 cursor-pointer">
        </div>
        <img className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="" />
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;