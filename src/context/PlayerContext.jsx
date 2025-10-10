import React, { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets/assets";

const PlayerContext = createContext();

export const PlayerContextProvider = (props) => {

    const audioRef = useRef(null);
    const seekBg = useRef(null);
    const seekBar = useRef(null);

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
      currentTime:{
        second:0,
        minute:0
      },
      totalTime:{
        second:0,
        minute:0
      }
    });

    const play = () => {
      audioRef.current.play();
      setPlayStatus(true);
    }

    const pause = () => {
      audioRef.current.pause();
      setPlayStatus(false);
    }

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause
    };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;