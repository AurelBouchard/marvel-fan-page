import React, {useState} from 'react';
import Loading from "../Loading";
import useItemContext from "../../hooks/useItemContext";

export default function Overview({data, itemCat}) {
    const [item, setItem] = useItemContext("Overview")
    
    
    function findLink(arr=[], type="wiki") {
        let output = "https://www.marvel.com/"+itemCat;
        
        arr.forEach((obj)=> {
            if (obj.type.toString() === type) {output = obj.url.toString()}
        })
        
        //console.log("link : ",output)
        return output;
    }
    
    
    return (
        data ? <div className={`flex flex-col space-y-6`}>
            <p className={`text-2xl `}>{data.name || data.title || data.fullName}</p>
            <div className={`flex justify-center`} >
                <img className={`h-auto`}
                     src={`${data.thumbnail?.path}.${data.thumbnail?.extension}`} alt={data.name || data.title || data.fullName}/>
            </div>
            <p className={`font-light tracking-wide`}><span className={`underline font-bold mr-1`}>Description:</span>{data.description || "No description yet"}</p>
            <a href={findLink(data.urls, "detail")} className={`text-teal`}
            >More about {data.name || data.title || data.fullName} on marvel.com if available</a>
            <div className={`flex justify-start`}>
                <p className={`uppercase text-2xs mr-1`}>marvel id: </p>
                <p className={`text-lime text-2xs`}>{data.id}</p>
            </div>
        </div> : <Loading/>
    )
}