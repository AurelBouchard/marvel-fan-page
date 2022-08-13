import React, {useEffect, useState} from 'react';

export default function SideBar({catIndex, setCatIndex, categories}) {
    const [collapsed, setCollapsed] = useState(false)
    const [hovered, setHovered] = useState(false)
    
    function toggleCollapse() {
        if (collapsed) {setCollapsed(false); return 0; } else {setCollapsed(true); }
    }
    
    const style = {
        item:"flex items-center text-grey bg-transparent hover:text-dark-darkest hover:bg-teal-dark h-12 pl-4",
        //selected:"flex items-center text-dark-darkest bg-teal hover:bg-teal h-12 pl-4"
        selected:"text-dark-darkest bg-teal hover:bg-teal"
    }
    
    return (
        <div className={`flex flex-col bg-dark z-10 h-full transition-all ${collapsed ? "w-14" : "w-56"}
        pt-8 pb-12 font-bold text-sm uppercase`}
             onMouseEnter={()=>{setHovered(true)}}
             onMouseLeave={()=>{setHovered(false)}}
        >
            {/* TITLE line : MENU with collapse button */}
            <a className="flex w-full justify-between items-center text-teal h-8 pl-4 pr-2 relative right-0">
                <p className={collapsed ? 'hidden m-0' : `block mr-12`}>Menu</p>
                <div className={`flex flex-1 justify-end items-center duration-150 text-3xs overflow-hidden
                ${(hovered || collapsed) ? "opacity-100" : "opacity-0"} cursor-pointer`}
                onClick={toggleCollapse}>
                    <div className={`flex items-center duration-200 ${(hovered || collapsed) ? "translate-x-0" : "-translate-x-16"}
                    ${collapsed ? 'hidden m-0' : `block mr-2`}`}>
                        <span className="mb-0.25">collapse</span>
                    </div>
                    <div className={`flex items-center duration-200 ${(hovered || collapsed) ? "translate-x-0" : "-translate-x-8"}
                    ${collapsed ? "scale-x-[-1]" : "scale-x-1"}`}>
                        <svg width="6.307" height="11.51" viewBox="0 0 6.307 11.51" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.307 1l-4 4.882 4 4.628" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className={`flex items-center h-8 duration-200 ${collapsed ? "scale-x-[-1] mr-3" : "scale-x-1"}`}>
                        <svg width="6.307" height="11.51" viewBox="0 0 6.307 11.51" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.307 1l-4 4.882 4 4.628" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
            </a>
            
            {/* ITEMS : links */}
            {categories.map((cat, index)=>{
                return (
                    <a key={index} className={`${style.item} ${index===catIndex ? style.selected : null}`}
                       onClick={(e)=> {setCatIndex(index)}}
                    >
                        <div className={`mr-2`}>
                            {(cat.logo)}
                        </div>
                        <p className={`transition-opacity duration-150 ${collapsed ? "opacity-0" : "delay-100 opacity-100"}`}>{cat.name}</p>
                    </a>
                    /* ${style.selected}*/
                )
            })}
        </div>
    )
}