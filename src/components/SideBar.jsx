import React, {useEffect, useState} from 'react';

// contexts
import useAppParam from "../hooks/useAppParam";
import useItemContext from "../hooks/useItemContext";


/**
 * Select the category of data to display in the mainContainer
 *
 * @returns {JSX.Element}
 * @constructor
 */
function SideBar() {
    //console.log("sidebar")
    
    // USE CONTEXTS
    const [appParam, setAppParam] = useAppParam("SideBar")
    const [item, setItem] = useItemContext("SideBar")
    // shortcuts
    const itemCatName = appParam.categories[item.catIndex || 0].name;
    
    // INTERNAL STATES
    const [visible, setVisible] = useState(false)
    const [collapsed, setCollapsed] = useState(true)
    const [hovered, setHovered] = useState(false)
    
    
    useEffect(()=> {
        if (!visible && item.marvelId) {
            //console.log("sidebar", itemCatName)
            setVisible(true)
        }
        if (visible && !item.marvelId) { setVisible(false) }
    }, [item.marvelId])
    
    
    function toggleCollapse() {
        if (collapsed) {setCollapsed(false); return 0; } else {setCollapsed(true); }
    }
    
    const style = {
        item:"flex items-center text-grey bg-transparent hover:text-dark-darkest hover:bg-teal-dark h-12 pl-4 cursor-pointer",
        //selected:"flex items-center text-dark-darkest bg-teal hover:bg-teal h-12 pl-4"
        selected:"text-dark-darkest bg-teal hover:bg-teal"
    }
    
    
    useEffect(() => {
        window.scrollTo(0, 0);
        setCollapsed(true)
    }, [item.subCatIndex])
    
    
    return (
        <div className={`fixed md:static flex bg-dark transition-all ${visible ? collapsed ? "w-14" : "w-56" : 'w-0'} shrink-0 z-30
        pt-8 pb-12 font-bold text-sm uppercase`}
             onMouseEnter={() => {
                 setHovered(true)
             }}
             onMouseLeave={() => {
                 setHovered(false)
             }}
        >
            <div className={`fixed bg-dark transition-all ${visible ? collapsed ? "w-14" : "w-56" : 'w-0'} overflow-hidden`}>
                {/* TITLE line : MENU with collapse button */}
                <div className="flex w-full justify-between items-center text-teal h-8 pl-4 pr-2 relative right-0">
                    
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
                </div>
                
                {/* 1st ITEM : overview */}
                <div key={0} className={`${style.item} ${item.subCatIndex === -1 ? style.selected : null}`}
                   onClick={(e) => {
                       //console.log("select overview")
                       setItem(item => ({...item, ...{subCatIndex: -1}}))
                   }}
                >
                    <div className={`mr-2`}>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"/>
                            <circle cx="12" cy="12" r="2.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        </svg>
                    
                    </div>
                    <p className={`transition-opacity duration-150 ${collapsed ? "opacity-0" : "delay-100 opacity-100"}`}>Overview</p>
                </div>
    
                
                {appParam.categories.map((cat, index) => {
                    
                    if (item.data && !item.data[cat.name]) {return null}
                    
                    return (
                        <div key={index+1} className={`${style.item} ${index === item.subCatIndex ? style.selected : null}`}
                           onClick={(e) => {
                               //console.log("select subCatIndex",index, item.data)
                               setItem(item => ({...item, ...{subCatIndex: index}}))
                           }}
                        >
                            <div className={`mr-2`}>
                                {(cat.logo)}
                            </div>
                            <div className={`flex flex-1 pr-4 justify-between items-center transition-opacity duration-150 ${collapsed ? "opacity-0" : "delay-100 opacity-100"}`}>
                                <p>{cat.name}</p>
                                {!item.data ? null :
                                    item.data[cat.name].available ?
                                        <span className={`text-teal text-xs py-0.5 px-2 border border-teal rounded-full bg-dark-darkest`}>
                                            {item.data[cat.name].available }</span>
                                        :
                                        <span className={`text-teal text-xs py-0.5 px-2 border border-teal rounded-full bg-dark-darkest`}>0</span>
                                }
                            
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default React.memo(SideBar)