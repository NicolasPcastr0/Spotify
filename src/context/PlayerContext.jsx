import React, { createContext, useRef } from "react";

const PlayerContext = createContext();

export const PlayerContextProvider = (props) => {

    const audioRef = useRef(null);

    const contextValue = {
        audioRef
    };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;