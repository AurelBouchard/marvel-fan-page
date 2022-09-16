import React, {useEffect, useState} from 'react';
import useItemContext from "../hooks/useItemContext";
import noImgSrc from "../assets/image_not_available.jpg";
import useAppParam from "../hooks/useAppParam";

export default function Reminder({props}) {
    
    // USE CONTEXTS
    const [appParam, setAppParam] = useAppParam("MainCatSelector")
    const [item, setItem] = useItemContext("MainContainer")
    
    // INTERNAL STATES
    const [posY, setPosY] = useState(0)
    
    useEffect(() => {
        window.addEventListener('scroll', ()=> setPosY(window.scrollY))
        return () => window.removeEventListener('scroll', ()=> setPosY(window.scrollY))
    }, [])
    
    return (
        !item.data ? null :
        <div className={`fixed  ${item.subCatIndex === -1 && posY < 180 ? "top-0" : "top-36 sm:top-18"}
            left-16 md:left-22 right-2 md:right-8 z-80 transition-all duration-300`}>
            <div className={`bg-dark h-14 shadow-lg shadow-black rounded-b-xl flex items-center overflow-hidden`}>
                <div className={`rounded-md h-14 w-14 overflow-hidden`}>
                    <img src={(item.data.thumbnail) ? `${item.data.thumbnail?.path}.${item.data.thumbnail?.extension}` : noImgSrc}
                         alt={item.data.name} className={`object-cover h-14 w-14`}/>
                </div>
                <div className={`p-2`}>
                    {appParam.categories[item.catIndex||0].logo}
                </div>
                <div className={`capitalize`}>
                    {item.data.name}
                </div>
            </div>
        </div>
    )
}