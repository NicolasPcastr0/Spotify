import React from "react";
import Navbar from "./Navbar"; 
import { albumsData } from "../assets/assets/assets"; 
import AlbumItem from "./AlbumItem"; 
import CustomScrollContainer from "./CustomScrollContainer"; 

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className="mb-4">
                <h1 className="font-bold my-5 text-2xl">Bom dia com os maiores hits do Brasil!</h1>
                <CustomScrollContainer>
                    <div className="flex">
                        {albumsData.map((item,index) => (
                            <AlbumItem key={index}
                            name={item.name}
                            image={item.image}
                            desc={item.desc} />
                        ))}
                    </div>
                </CustomScrollContainer>
            </div>
           
        </>
    )
}

export default DisplayHome;