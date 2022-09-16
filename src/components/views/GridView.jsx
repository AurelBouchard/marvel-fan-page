import React from 'react';

// contexts
import useAppParam from "../../hooks/useAppParam";
import useItemContext from "../../hooks/useItemContext";

// components
import Card from "./Card";



function GridView({gridData}) {
    //console.log("GridView",JSON.stringify(gridData))
    
    // USE CONTEXTS
    const [appParam, setAppParam] = useAppParam("GridView")
    const [item, setItem] = useItemContext("GridView")
    // shortcuts
    const subCatName = appParam.categories[item.subCatIndex].name;
    
    
    
    return (
        <div className={`mt-16 md:mt-12`}>
            <p className={`font-bold uppercase mb-4 md:mb-6`}>{gridData.total} {subCatName}</p>
            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4`}>
                {gridData.table?.map((elt, index) => {
                    return (
                        <Card key={elt.resourceURI.substring(elt.resourceURI.lastIndexOf("/")+1)}
                              id={elt.resourceURI.substring(elt.resourceURI.lastIndexOf("/")+1)}
                              name={elt.name || elt.title || elt.fullName}
                              resource={elt.resourceURI}
                              //latency={10 + index * 200}  //100+300
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default React.memo(GridView)