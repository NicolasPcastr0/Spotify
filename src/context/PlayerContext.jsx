import React, { createContext, useEffect, useRef, useState } from "react";
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

    const playWhithId = async (id) => {
      await setTrack(songsData[id]);
      await audioRef.current.play();
      setPlayStatus(true);
    }

    const previus = async () => {
      if(track.id > 0){
        await setTrack(songsData[track.id - 1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    }

    const next = async () => {
      if(track.id < songsData.length - 1){
        await setTrack(songsData[track.id + 1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    }

    const seekSong = async (e) => {
      const offset = seekBg.current.getBoundingClientRect().left;
      const clickX = e.clientX - offset;
      const width = seekBg.current.clientWidth;
      const duration = audioRef.current.duration;
      const newTime = (clickX / width) * duration;
      audioRef.current.currentTime = newTime;
    }

    useEffect(() => {
      setTimeout(() => {

        audioRef.current.ontimeupdate = () => {

          seekBar.current.style.width = (audioRef.current.currentTime / audioRef.current.duration) * 100 + "%";

          setTime({
            currentTime: {
              minute: Math.floor(audioRef.current.currentTime / 60),
              second: Math.floor(audioRef.current.currentTime % 60)
            },
            totalTime: {
              minute: Math.floor(audioRef.current.duration / 60),
              second: Math.floor(audioRef.current.duration % 60)
            }
          });
        };
      }, 1000);
    }, [audioRef])

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
        pause,
        playWhithId,
        previus,
        next,
        seekSong
    };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;