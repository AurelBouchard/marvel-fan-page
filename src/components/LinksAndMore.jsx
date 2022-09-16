import React from 'react';

// contexts
import useAppParam from "../hooks/useAppParam";
import useItemContext from "../hooks/useItemContext";

// components
import ShowAll from "./ShowAll";
import Rating from "./Rating";
import Stats from "./Stats";



/**
 * Show a list of all items of current category.
 * If a specific item is selected, show rating, stats
 *
 * @returns {JSX.Element}
 * @constructor
 */
function LinksAndMore() {
    //console.log("LinksAndMore")
    
    // USE CONTEXTS
    const [appParam, setAppParam] = useAppParam("LinksAndMore")
    const [item, setItem] = useItemContext("LinksAndMore")
    // shortcuts
    const catName = appParam.categories[item.catIndex || 0].name;
    
    // style
    const width = catName==="stories" ? 'md:w-6/12 w-auto' : 'md:w-3/12 w-auto';
    
    
    
    return (
        <div className={`flex flex-col ${width} shrink-0 ${catName ? 'ml-14' : null} md:ml-0 flex-1 md:flex-none mt-2 ${item.subCatIndex === -1 ? 'md:mt-8' : 'md:mt-18'}`}>
            
            {/*<div className={`transition-all duration-300 ${searchResult ? "opacity-100 h-auto mb-6" : "opacity-0 h-0 mb-0" } space-y-6`}>
                <Rating data={data} />
                <Stats data={data} />
            </div>*/}
            
            <ShowAll  />
            
            
            <div className={`flex-1`}/>
            
        </div>
    )
}


export default React.memo(LinksAndMore)