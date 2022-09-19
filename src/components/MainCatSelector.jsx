import React, {useState} from 'react';

// contexts
import useAppParam from "../hooks/useAppParam";
import useItemContext from "../hooks/useItemContext";

// data
import {initialItem} from '../App.jsx'


/**
 * Will contain a dropdown menu
 * Allow to change ItemContext catIndex
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function MainCatSelector() {
    //console.log("MainCatSelector")
    const expandable = true
    
    // USE CONTEXTS
    const [appParam, setAppParam] = useAppParam("MainCatSelector")
    const [item, setItem] = useItemContext("MainCatSelector")
    
    // INTERNAL STATES
    const [collapsed, setCollapsed] = useState(true)
    
    function toggleCollapse() {
        if (collapsed) { setCollapsed(false) }
        else {setCollapsed(true)}
    }
    
    
    
    return (
        <div id="catSelector_Button"
             className={`relative`}
             onClick={toggleCollapse}>
            
            <div id="catSelector_Img"
                 className={`bg-black border-1.5 border-grey-darker rounded-tl-lg rounded-bl-lg flex
                 h-12 px-2 outline-none cursor-pointer text-grey-alt`}>
                <div className={`flex items-center justify-between w-10 `}>
                    <div>
                        {appParam.categories[item.catIndex||0].logo}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.686" height="14.785" viewBox="0 0 8.686 14.785">
                        <g transform="rotate(90 4.343 7.38)">
                            <path fill="currentColor"
                                  d="M8.45 6.816L1.871.236a.811.811 0 00-1.144 0L.242.721a.81.81 0 000 1.144L5.767 7.39.236 12.921a.811.811 0 000 1.144l.485.484a.811.811 0 001.144 0L8.45 7.964a.816.816 0 000-1.148z"/>
                        </g>
                    </svg>
                </div>
            </div>
            
            <div id="catSelector_DropDown"
                 className={`absolute top-12 ${collapsed ? 'hidden' : 'block'} bg-dark-darkest text-grey-alt rounded-lg -mt-12 z-90`}
                 onMouseLeave={() => {setCollapsed(true)}}>
                {appParam.categories.map((cat, index) => {
                    return (
                        <div key={index} className={`h-8 flex items-center hover:bg-teal-light hover:text-dark-darkest px-3 cursor-pointer`}
                             onClick={()=>{
                                 //console.log("mainCatSelector setCatIndex", index)
                                 if (index !== item.catIndex) {
                                     setItem({defaultItem: initialItem, ...{catIndex: index}})
                                 }
                             }}
                        >
                            {cat.logo}
                            <div className={`ml-2 capitalize`}>{cat.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    
    )
}