import React from 'react';
import noImgSrc from "../../assets/image_not_available.jpg"

export default function Card({name, setMarvelId, setItemCatName, setCatIndex, resource, subCatName, subCatIndex}) {
    //const cardCatValue = 1; // find index in categories
    const id = resource.substring(resource.lastIndexOf("/")+1);
    
    const cardStyle = [
        {   // characters
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`bg-dark border-none rounded w-12 h-12`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex items-center justify-between space-x-8 p-1 text-xs`},
        {   // comics
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`bg-dark border-none rounded w-12 h-12`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex items-center justify-between space-x-8 p-1 text-xs`},
        {   // creators
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`bg-dark border-none rounded w-12 h-12`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex items-center justify-between space-x-8 p-1 text-xs`},
        {   // events
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`bg-dark border-none rounded w-12 h-12`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex items-center justify-between space-x-8 p-1 text-xs`},
        {   // series
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`bg-dark border-none rounded w-12 h-12`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex items-center justify-between space-x-8 p-1 text-xs`},
        {   // stories
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`bg-dark border-none rounded w-12 h-12`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex items-center justify-between space-x-8 p-1 text-xs`}
    ]
    
    let imgSrc = null
    
    return (
        <div key={id}
             className={cardStyle[subCatIndex].main}
                onClick={() => {
                    setMarvelId(id);
                    if (setCatIndex) {setCatIndex(subCatIndex)} else {console.log("no setCatIndex !?")}
                    if (setItemCatName) {setItemCatName(subCatName)} else {console.log("no setItemCatName !?")}
                }}
            >
            <div className={`flex border-b`}>
                <div className={`p-2 shrink-0`}>
                    <img src={imgSrc || noImgSrc} alt={name} className={cardStyle[subCatIndex].img}/>
                </div>
                <p className={cardStyle[subCatIndex].title}>
                    {name}
                </p>
            </div>
            <div className={cardStyle[subCatIndex].bottom}>
                <p>Date :</p>
                <div className={`flex justify-start`}>
                    <p className={`uppercase text-2xs mr-1`}>marvel id: </p>
                    <p className={`text-lime text-2xs`}>{resource.substring(resource.lastIndexOf("/")+1)}</p>
                </div>
            </div>
        </div>
    )
}