import React, {useEffect, useMemo, useState} from 'react';
import Overview from "./views/Overview";
import GridView from "./views/GridView";
import {categories} from "../models/categories";
/*import Comics from "./views/Comics";
import Characters from "./views/Characters";
import Creators from "./views/Creators";
import Events from "./views/Events";
import Series from "./views/Series";
import Stories from "./views/Stories";*/

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
export default function MainView({searchResult, subCatIndex, itemCatName, setCatIndex, setMarvelId, setItemCatName}) {
    //const defaultView = <Overview data={searchResult} itemCat={itemCatName}/>
    //const [showView, setShowView] = useState(defaultView)
    
    
/*    useEffect(() => {
        if (searchResult) {
            if (subCatIndex && searchResult) {
                console.log("show",categories[subCatIndex].name, "of",searchResult.name)
                setShowView(<GridView data={searchResult[categories[subCatIndex].name].items}
                                      subCatIndex={subCatIndex}
                                      setItemCatName={setItemCatName}
                                      setMarvelId={setMarvelId}
                                      setCatIndex={setCatIndex}/>)
            } else {
                setShowView(defaultView)
            }
        }
    }, [subCatIndex])*/
/*
    useEffect(() => {
        if (searchResult) {
            if (subCatIndex) {
                console.log("show",categories[subCatIndex].name, "of",searchResult.name)
                setShowView(<GridView data={searchResult}
                                      subCatIndex={subCatIndex}
                                      setItemCatName={setItemCatName}
                                      setMarvelId={setMarvelId}
                                      setCatIndex={setCatIndex}/>)
            } else {
                setShowView(defaultView)
            }
        }
    }, [searchResult])
    */
    
    const gridData = useMemo(()=> {
/*        console.log(subCatIndex)
        console.log(categories[subCatIndex])
        if (subCatIndex !== -1) {
            console.log(categories[subCatIndex].name)
        }
        if (searchResult) {
            console.log(searchResult)
            //console.log(searchResult[categories[subCatIndex].name])
            //console.log(searchResult[categories[subCatIndex].name].items)
        }*/
        return (!searchResult) ? null : searchResult[categories[subCatIndex].name]?.items
    }, [searchResult, subCatIndex])
    
    const alternative = <div className={`flex justify-between items-center`}>
        <p>Please select an item</p>
        <div className={`animate-bounce md:animate-horiBounce`}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className={`rotate-90 md:rotate-0`}>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"/>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H4.75"/>
            </svg>
        </div>
    </div>
    
    
    return (
        <div className={`flex flex-col flex-1 ${itemCatName ? 'ml-14' : null} md:ml-auto`}>
            <div id="showView" className="bg-dark rounded-xl p-4 z-0">
                {!searchResult ? alternative :
                    subCatIndex === 0 ? <Overview data={searchResult} itemCat={itemCatName}/> :
                        <GridView data={gridData}
                                  subCatIndex={subCatIndex}
                                  setItemCatName={setItemCatName}
                                  setMarvelId={setMarvelId}
                                  setCatIndex={setCatIndex}/>
                }
            </div>
            <div className={`hidden md:block md:flex-1`}/>
        </div>
    )
}

//export default React.memo(MainView)