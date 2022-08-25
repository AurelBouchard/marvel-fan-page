import React from 'react';
import Card from "./Card";

export default function Comics({data, setItemCat, setCatIndex, setMarvelId}) {
    const subCat = "comics";
    
    console.log(data[subCat].items)
    
    
    return (
        <div className={`rr`}>
            <p className={`font-bold uppercase mb-6`}>{data[subCat].available} {subCat}</p>
            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4`}>
                {data[subCat].items.map((elt, index) => {
                    return (
                        <Card key={index} style={subCat}
                              id={elt.resourceURI.substring(elt.resourceURI.lastIndexOf("/")+1)}
                              name={elt.name || elt.title || elt.fullName}
                              setItemCat={setItemCat} setCatIndex={setCatIndex} setMarvelId={setMarvelId}
                        />
                    )
                })}
            </div>
        </div>
    )
}