import React from 'react';
import ShowAll from "./ShowAll";
import Rating from "./Rating";
import Stats from "./Stats";

/**
 * Show a list of all items of current category.
 * If a specific item is selected, show rating, stats
 *
 * @param listOfAllItems
 * @param setPageOffset
 * @param pageOffset
 * @param searchResult
 * @param category
 * @param setMarvelId
 * @returns {JSX.Element}
 * @constructor
 */
export default function Related({listOfAllItems, setPageOffset, pageOffset, searchResult, category, setMarvelId}) {
    let data= "data n data"
    
    return (
        <div className={`flex flex-col flex-auto w-24`}>
            
            <div className={`transition-all duration-300 ${searchResult ? "opacity-100 h-auto mb-6" : "opacity-0 h-0 mb-0" } space-y-6`}>
                <Rating data={data} />
                <Stats data={data} />
            </div>
            
            <ShowAll catName={category.name} listOfAllItems={listOfAllItems}
                     setMarvelId={setMarvelId}
                     setPageOffset={setPageOffset} pageOffset={pageOffset}/>
            
        </div>
    )
}