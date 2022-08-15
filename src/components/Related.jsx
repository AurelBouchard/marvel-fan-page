import React from 'react';
import ShowAll from "./ShowAll";
import Rating from "./Rating";
import Stats from "./Stats";

/**
 * Show a list of all items of current category.
 * If a specific item is selected, show rating, stats
 *
 * @param searchResult
 * @param category
 * @returns {JSX.Element}
 * @constructor
 */
export default function Related({searchResult, category}) {
    var searchResult = "toto";
    let data= "data n data"
    
    return (
        <div className={`flex flex-col flex-auto w-24 space-y-6`}>
            
            <div className={`transition-all duration-300 ${searchResult ? "opacity-100" : "opacity-0" } space-y-6`}>
                <Rating searchResult={searchResult} />
                <Stats data={data} />
            </div>
            
            <ShowAll catName={category.name} />
            
        </div>
    )
}