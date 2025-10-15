import React from "react"
import { assets } from "../assets/assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex ">
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
            <div onClick={() => navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
                <img className="w-6" src={assets.home_icon} alt="" />
                <p className="font-bold">Home</p>
            </div>
            <div className="flex items-center gap-3 pl-8 cursor-pointer">
                <img className="w-6" src={assets.search_icon} alt="" />
                <p className="font-bold">Pesquisa</p>
            </div>
        </div>
        <div className="bg-[#121212] h-[85%] rounded">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-8" src={assets.stack_icon} alt="" />
              <p className="font-semibold">Biblioteca</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-6" src={assets.arrow_icon} alt="" />
              <img className="w-6" src={assets.plus_icon} alt="" />
            </div>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-bold flex flex-col items-start justify-start gap-3 pl-4">
            <h1>Crie sua Playlist</h1>
            <p className="font-semibold">Adicione suas músicas favoritas a uma nova playlist.</p>
            <button className="bg-[#1DB954] text-white py-1.5 px-4 rounded-full cursor-pointer">Clique aqui</button>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-bold flex flex-col items-start justify-start gap-3 pl-4 mt-4">
            <h1>Ache podcasts do seu interesse</h1>
            <p className="font-semibold">Descubra novos podcasts e siga os seus favoritos.</p>
            <button className="bg-[#1DB954] text-white py-1.5 px-4 rounded-full cursor-pointer">Pesquisar podcast</button>
          </div>
        </div>
    </div>
  );
};
 
export default Sidebar;