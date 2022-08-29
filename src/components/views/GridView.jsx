import React, {useEffect, useState} from 'react';
import Card from "./Card";
import {categories} from "../../models/categories";

export default function GridView({data,
                                     setItemCatName,
                                     setCatIndex,
                                     setMarvelId,
                                     subCatIndex}) {
    
    const [subCatName, setSubCatName] = useState(null)
    const [listOfCard, setListOfCard] = useState(data[subCatName]?.items)
    
    console.log(data[subCatName]?.items)
    
    useEffect(()=> {
        if (subCatName) {
            setListOfCard(data[subCatName]?.items)
        }
    }, [subCatName])
    
    useEffect(()=>{
        setListOfCard(null)
        setSubCatName(categories[subCatIndex].name)
    }, [subCatIndex])
    
    
    return (
        <div className={`rr`}>
            <p className={`font-bold uppercase mb-6`}>{data[subCatName]?.available} {subCatName}</p>
            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4`}>
                {listOfCard?.map((elt, index) => {
                    return (
                        <Card subCatIndex={subCatIndex} subCatName={subCatName}
                              dataId={elt.resourceURI.substring(elt.resourceURI.lastIndexOf("/")+1)}
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