import React, {useEffect, useState} from 'react';


/**
 * Select the category of data to display in the mainContainer
 *
 * @param subCatIndex
 * @param setSubCatIndex
 * @param categories
 * @param category
 * @returns {JSX.Element}
 * @constructor
 */
export default function SideBar({subCatIndex, setSubCatIndex, categories, itemCat, searchResult}) {
    const [collapsed, setCollapsed] = useState(false)
    const [hovered, setHovered] = useState(false)
    
    //console.log("sidebar")
    
    
    
    
    function toggleCollapse() {
        if (collapsed) {setCollapsed(false); return 0; } else {setCollapsed(true); }
    }
    
    const style = {
        item:"flex items-center text-grey bg-transparent hover:text-dark-darkest hover:bg-teal-dark h-12 pl-4",
        //selected:"flex items-center text-dark-darkest bg-teal hover:bg-teal h-12 pl-4"
        selected:"text-dark-darkest bg-teal hover:bg-teal"
    }
    
    useEffect(() => {
        console.log("reset menu")
        setSubCatIndex(0)
        window.scrollTo(0, 0);
    }, [])
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [subCatIndex])
    
    
    return (
            <div className={`fixed md:static flex bg-dark transition-all ${collapsed ? "w-14" : "w-56"} shrink-0 z-30
        pt-8 pb-12 font-bold text-sm uppercase`}
                 onMouseEnter={() => {
                     setHovered(true)
                 }}
                 onMouseLeave={() => {
                     setHovered(false)
                 }}
            >
                <div className={`fixed bg-dark transition-all ${collapsed ? "w-14" : "w-56"} overflow-hidden`}>
                    {/* TITLE line : MENU with collapse button */}
                    <a className="flex w-full justify-between items-center text-teal h-8 pl-4 pr-2 relative right-0">
                        
                        <p className={collapsed ? 'hidden m-0' : `block mr-12`}>Menu</p>
                        
                        <div className={`flex flex-1 justify-end items-center duration-150 text-3xs overflow-hidden
                ${(hovered || collapsed) ? "opacity-100" : "md:opacity-0"} cursor-pointer`}
                             onClick={toggleCollapse}>
                            
                            <div className={`flex items-center duration-200 ${(hovered || collapsed) ? "translate-x-0" : "md:-translate-x-16"}
                    ${collapsed ? 'hidden m-0' : `block mr-2`}`}>
                                <span className="mb-0.25">collapse</span>
                            </div>
                            
                            <div className={`flex items-center duration-200 ${(hovered || collapsed) ? "translate-x-0" : "md:-translate-x-8"}
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
        
                    {/* 1st ITEM : overview */}
                    <a key={0} className={`${style.item} ${0 === subCatIndex ? style.selected : null}`}
                       onClick={(e) => {
                           setSubCatIndex(0)
                       }}
                    >
                        <div className={`mr-2`}>
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"/>
                                <circle cx="12" cy="12" r="2.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            </svg>

                        </div>
                        <p className={`transition-opacity duration-150 ${collapsed ? "opacity-0" : "delay-100 opacity-100"}`}>Overview</p>
                    </a>
                    
                    {categories.map((cat, index) => {
                       /* if (itemCat === cat.name) {return null}
                        if ((itemCat === "characters" && cat.name === "creators") ||
                            (itemCat === "comics" && cat.name === "series") ||
                            (itemCat === "creators" && cat.name === "characters")) {return null }*/
                        
                        if (searchResult && !searchResult[cat.name]) {return null}
                        
                        return (
                            <a key={index+1} className={`${style.item} ${index+1 === subCatIndex ? style.selected : null}`}
                               onClick={(e) => {
                                   setSubCatIndex(index+1)
                               }}
                            >
                                <div className={`mr-2`}>
                                    {(cat.logo)}
                                </div>
                                <div className={`flex flex-1 pr-4 justify-between items-center transition-opacity duration-150 ${collapsed ? "opacity-0" : "delay-100 opacity-100"}`}>
                                    <p>{cat.name}</p>
                                    {!searchResult ? null :
                                        searchResult[cat.name].available ?
                                            <span className={`text-teal text-xs py-0.5 px-2 border border-teal rounded-full bg-dark-darkest`}>
                                            {searchResult[cat.name].available }</span>
                                            :
                                            <span className={`text-teal text-xs py-0.5 px-2 border border-teal rounded-full bg-dark-darkest`}>0</span>
                                    }
                                    
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
    )
}