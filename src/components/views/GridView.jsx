import React, {useEffect, useState} from 'react';
import Card from "./Card";
import {categories} from "../../models/categories";

export default function GridView({data, setItemCatName, setCatIndex, setMarvelId, subCatIndex}) {
    const [subCatName, setSubCatName] = useState(null)
    
    console.log(data)
    
    useEffect(()=>{
        setSubCatName(categories[subCatIndex].name)
    }, [subCatIndex])
    
    
    return (
        <div className={`rr`}>
            <p className={`font-bold uppercase mb-6`}>{data[subCatName]?.available} {subCatName}</p>
            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4`}>
                {data[subCatName]?.items?.map((elt, index) => {
                    return (
                        <Card subCatIndex={subCatIndex} subCatName={subCatName}
                            //id={elt.resourceURI.substring(elt.resourceURI.lastIndexOf("/")+1)}
                              resource={elt.resourceURI}
                              name={elt.name || elt.title || elt.fullName}
                              setMarvelId={setMarvelId}
                              setItemCatName={setItemCatName} setCatIndex={setCatIndex}
                              latency={100+index*300}
                        />
                    )
                })}
            </div>
        </div>
    )
}