import React from 'react';

export default function Comics({data, setItemCat, setCatIndex, setMarvelId}) {
    const subCat = "comics";
    
    console.log(data[subCat].items)
    
    
    return (
        <div className={`flex flex-col space-y-6`}>
            <p className={`font-bold uppercase`}>{data[subCat].available} comics</p>
            <div>
                {data[subCat].items.map((elt, index) => {
                    return (
                        <div key={index} className={`mb-[1px]`}>
                            <div
                                className={`uppercase font-light text-sm bg-grey-slate rounded pl-2 py-0.5
                    hover:bg-teal hover:text-dark-darkest hover:font-bold cursor-pointer
                    animate-appear
                    `}
                                onClick={() => {
                                    //console.log("select an item in subcat with id :")
                                    //console.log(elt.resourceURI.substring(elt.resourceURI.lastIndexOf("/")+1))
                                    setMarvelId(elt.resourceURI.substring(elt.resourceURI.lastIndexOf("/")+1));
                                    setCatIndex(1);
                                    setItemCat(1)
                                }}
                            >
                                {elt.name || elt.title || elt.fullName}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}