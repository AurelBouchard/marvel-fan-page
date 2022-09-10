import React, {useMemo} from 'react';

// contexts
import useAppParam from "../hooks/useAppParam";
import useItemContext from "../hooks/useItemContext";

// components
import Overview from "./views/Overview";
import GridView from "./views/GridView";
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
function MainView({searchResult, subCatIndex, //itemCatName,// setCatIndex, setMarvelId,
                      //setItemCatName
}) {
    //console.log("MainView", subCatIndex)
    
    // USE CONTEXTS
    const [appParam, setAppParam] = useAppParam("MainView")
    const [item, setItem] = useItemContext("MainView")
    
    // shortcuts
    const itemCatName = appParam.categories[item.catIndex || 0].name;
    const subCatName = appParam.categories[Math.max(subCatIndex,0)].name;
    

    
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
        if (!searchResult || subCatIndex<0) {return null}
        return {table: searchResult[subCatName]?.items, total: searchResult[subCatName]?.available}
    }, [searchResult, subCatIndex])
    
    
    
    return (
        <div className={`flex flex-col flex-1 ${itemCatName ? 'ml-14' : null} md:ml-auto`}>
            <div id="showView" className="bg-dark rounded-xl p-4 z-0">
                {!searchResult ?
                    <div className={`flex justify-between items-center`}>
                        <p>Please select an item</p>
                        <div className={`animate-bounce md:animate-horiBounce`}>
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className={`rotate-90 md:rotate-0`}>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"/>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H4.75"/>
                            </svg>
                        </div>
                    </div>
                    :
                    subCatIndex === -1 ? <Overview data={searchResult} itemCat={itemCatName}/> :
                        <GridView gridData={gridData}
                                  subCatIndex={subCatIndex}
                                  setItemCatName={setItemCatName}
                                  //setMarvelId={setMarvelId}
                                  //setCatIndex={setCatIndex}
                        />
                }
            </div>
            <div className={`hidden md:block md:flex-1`}/>
        </div>
    )
}

export default React.memo(MainView)