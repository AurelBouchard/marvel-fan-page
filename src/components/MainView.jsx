import React, {useEffect, useState} from 'react';
import Overview from "./views/Overview";
import Comics from "./views/Comics";
import Characters from "./views/Characters";
import Creators from "./views/Creators";
import Events from "./views/Events";
import Series from "./views/Series";
import Stories from "./views/Stories";
import GridView from "./views/GridView";

/**
 * Show main data of the selected item.
 * Look will change according to selected subcat (if so)
 *
 * @param searchResult
 * @param subCatIndex
 * @param categories
 * @returns {JSX.Element}
 * @constructor
 */
export default function MainView({searchResult, subCatIndex, itemCat, setCatIndex, setMarvelId, setItemCat}) {
    
    const defaultView = <Overview data={searchResult} itemCat={itemCat}/>
    const [showView, setShowView] = useState(defaultView)
    
    
    
    useEffect(() => {
        console.log("show ",subCatIndex)
        if (searchResult) {
/*            switch(subCatIndex) {
                case 1: setShowView( <Characters data={searchResult} setItemCat={setItemCat} setCatIndex={setCatIndex} setMarvelId={setMarvelId}/>); break;
                case 2: setShowView( <Comics data={searchResult} setItemCat={setItemCat} setCatIndex={setCatIndex} setMarvelId={setMarvelId}/>); break;
                case 3: setShowView( <Creators data={searchResult} setItemCat={setItemCat} setCatIndex={setCatIndex} setMarvelId={setMarvelId}/>); break;
                case 4: setShowView( <Events data={searchResult} setItemCat={setItemCat} setCatIndex={setCatIndex} setMarvelId={setMarvelId}/>); break;
                case 5: setShowView( <Series data={searchResult} setItemCat={setItemCat} setCatIndex={setCatIndex} setMarvelId={setMarvelId}/>); break;
                case 6: setShowView( <Stories data={searchResult} setItemCat={setItemCat} setCatIndex={setCatIndex} setMarvelId={setMarvelId}/>); break;
                default: setShowView(defaultView ); break;
            }*/
            
            setShowView(<GridView data={searchResult} subCatIndex={subCatIndex} setItemCat={setItemCat} setMarvelId={setMarvelId} setCatIndex={setCatIndex}/>)
            
            
            }
    }, [subCatIndex])
    
    
    
    const alternative = <div className={`flex justify-between items-center`}>
        <p>Please select an item</p>
        <div className={`animate-horiBounce`}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"/>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H4.75"/>
            </svg>
        </div>
    </div>
    
    
    
    return (
        <div className={`flex flex-col flex-1`}>
            <div id="showView" className="bg-dark rounded-xl p-4 z-0">
                {!searchResult ? alternative :
                    showView
                }
            </div>
            <div className={`flex-1`}/>
        </div>
    )
}