import React, {useEffect, useState} from 'react';
import noImgSrc from "../../assets/image_not_available.jpg"
import {api} from "../../credentials";
import axios from "axios";


export default function Card({name, setMarvelId, setItemCatName, setCatIndex, resource, subCatName, subCatIndex, latency}) {
    const [data, setData] = useState(null)
    const id = resource.substring(resource.lastIndexOf("/")+1);
    
    const cardStyle = [
        {   // characters
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`rounded w-12 h-12 overflow-hidden`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex flex-1 w-full items-center space-x-8 p-1 text-xs`},
        {   // comics
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`rounded w-12 h-12 overflow-hidden`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex flex-1 w-full items-center space-x-8 p-1 text-xs`},
        {   // creators
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`rounded w-12 h-12 overflow-hidden`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex flex-1 w-full items-center space-x-8 p-1 text-xs`},
        {   // events
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`rounded w-12 h-12 overflow-hidden`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex flex-1 w-full items-center space-x-8 p-1 text-xs`},
        {   // series
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`rounded w-12 h-12 overflow-hidden`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex flex-1 w-full items-center space-x-8 p-1 text-xs`},
        {   // stories
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`rounded w-12 h-12 overflow-hidden`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex flex-1 w-full items-center space-x-8 p-1 text-xs`}
    ]
    
    let imgSrc = null
    
    
    useEffect(() => {
        setTimeout(()=>{
            if (resource) {
            console.log("card fetch")
            console.log(`${resource}${api.credentials}`)
    
            axios.get(`${resource}${api.credentials}`)
                .then( response => {
                    console.log("searchResult => ",response.data?.data?.results[0])
                    setData(response.data?.data?.results[0])
                } )
            // NEED ERROR HANDLING !!!!!!!!!!!!!!!!!
        }}, latency)
    },[resource])
    
    
    
    
    
    
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
                <div className={`p-2 shrink-0`}><div className={cardStyle[subCatIndex].img}>
                    <img src={(data && data.thumbnail) ? `${data.thumbnail?.path}.${data.thumbnail?.extension}` : noImgSrc}
                         alt={name} className={`bg-dark border-none`}/></div>
                </div>
                <p className={cardStyle[subCatIndex].title}>
                    {name}
                </p>
            </div>
            <div className={cardStyle[subCatIndex].bottom}>
                <div className={`flex justify-start`}>
                    <p className={`uppercase mr-1`}>Date :</p>
                    <p className={``}>{resource.substring(resource.lastIndexOf("/")+1)}</p>
                </div>
                <div className={`flex justify-start justify-self-end`}>
                    <p className={`uppercase text-2xs mr-1`}>marvel id: </p>
                    <p className={`text-lime text-2xs`}>{resource.substring(resource.lastIndexOf("/")+1)}</p>
                </div>
                <div className={`flex justify-self-end`}>
                    <a className={`normal-case hover:text-teal`}>MM</a>
                </div>
            </div>
        </div>
    )
}