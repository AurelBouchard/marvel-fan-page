import React, {useEffect} from 'react';
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
 * @param setItemCat
 * @returns {JSX.Element}
 * @constructor
 */
export default function LinksAndMore({listOfAllItems, setPageOffset, pageOffset, catName, itemCatName, setMarvelId, //setItemCat,
                                     dico, setDico, catIndex, listSize, setItemCatName}) {
    //let data= "available soon"
    console.log("related", catIndex)
    
    const width = catName==="stories" ? 'md:w-6/12 w-auto' : 'md:w-3/12 w-auto';
    
    return (
        <div className={`flex flex-col ${width} shrink-0 ${itemCatName ? 'ml-14' : null} md:ml-0 flex-1 md:flex-none`}>
            
            {/*<div className={`transition-all duration-300 ${searchResult ? "opacity-100 h-auto mb-6" : "opacity-0 h-0 mb-0" } space-y-6`}>
                <Rating data={data} />
                <Stats data={data} />
            </div>*/}
            
            <ShowAll catName={catName} listOfAllItems={listOfAllItems}
                     setMarvelId={setMarvelId} //setItemCat={setItemCat}
                     setItemCatName={setItemCatName}
                     setPageOffset={setPageOffset} pageOffset={pageOffset}
                     //dico={dico} setDico={setDico}
                     catIndex={catIndex} listSize={listSize}
            />
            
            
            <div className={`flex-1`}/>
            
        </div>
    )
}