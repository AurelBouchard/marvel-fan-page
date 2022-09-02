import React, {useEffect, useState} from 'react';
import Card from "./Card";
import {categories} from "../../models/categories";

export default function GridView({data,
                                     setItemCatName,
                                     setCatIndex,
                                     setMarvelId,
                                     subCatIndex}) {
    
    //const [categories[subCatIndex,.name setSubCatName] = useState(categories[subCatIndex].name)
    //const [listOfCard, setListOfCard] = useState(data[categories[subCatIndex].name]?.items)
    
    //console.log("GridView",data[categories[subCatIndex].name]?.items)
    console.log("GridView",data)
    
/*    useEffect(()=> {
        if (categories[subCatIndex).name {
            setListOfCard(data[categories[subCatIndex].name?.items)
        }
    }, [categories[subCatIndex].name)*/
    
/*    useEffect(()=>{
        setListOfCard(null)
        //setSubCatName(categories[subCatIndex].name)
    }, [subCatIndex])
    
    */
    return (
        <div className={`rr`}>
            <p className={`font-bold uppercase mb-6`}>{data.length} {categories[subCatIndex].name}</p>
            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4`}>
                {data.map((elt, index) => {
                    return (
                        <Card subCatIndex={subCatIndex} subCatName={categories[subCatIndex].name}
                              key={elt.resourceURI.substring(elt.resourceURI.lastIndexOf("/")+1)}
                              id={elt.resourceURI.substring(elt.resourceURI.lastIndexOf("/")+1)}
                                   resource={elt.resourceURI}
                                   name={elt.name || elt.title || elt.fullName}
                                   setMarvelId={setMarvelId}
                                   setItemCatName={setItemCatName} setCatIndex={setCatIndex}
                                   latency={100 + index * 500}  //100+300
                        />
                    )
                })}
            </div>
        </div>
    )
}

//export default React.memo(GridView)