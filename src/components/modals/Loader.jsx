import React from 'react';



export default function Loader() {
    
    
    return (
        <div className={`h-screen w-screen fixed top-0 left-0 md:flex justify-center items-center animate-appear-slow z-100`}>
            <img src='../../src/assets/short_comp.webp' alt="" className={`flex-1 md:hidden`}/>
            <img src='../../src/assets/full_no_loss.webp' alt="" className={`flex-1 hidden md:block`}/>
        </div>
    )
}