import React from "react";
import { useContext } from "react";
import PlayerContext from "../context/PlayerContext";

const SongItem = ({ image, name, desc, id }) => {

    const {playWhithId} = useContext(PlayerContext);

    return (
        <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]" onClick={() => playWhithId(id)}>
            <img className=" rounded" src={image} alt="" />
            <p className="text-white font-bold mt-2 mb-1">{name}</p>
            <p className="text-slate-200 text-sm">{desc}</p>
        </div>
    );
};

export default SongItem;
