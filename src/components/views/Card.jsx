import React, {useEffect, useState} from 'react';
import {api} from "../../credentials";
import axios from "axios";

// contexts
import useItemContext from "../../hooks/useItemContext";

// components
import noImgSrc from "../../assets/image_not_available.jpg"



function Card({id, name, resource, latency}) {
    //console.log("card render", id)
    
    // USE CONTEXTS
    const [item, setItem] = useItemContext("Card "+id.toString())
    
    // INTERNAL STATES
    const [freshData, setFreshData] = useState(null)
    const [allowFetching, setAllowFetching] = useState(false)
    const cardStyle = React.useMemo(()=> {
        return [
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
    ] }, [])
    
    
    useEffect(() => {
        setTimeout(() => { setAllowFetching(true) },
            0 //latency
        )
    }, [])

    useEffect(() => {
            setAllowFetching(false)
            if (resource && allowFetching) {
                // use https
                let uri = resource;
                if (uri.indexOf('https')!==0) {
                    uri = 'https'+resource.substring(4)
                }
            
                //console.log(`fetching ${uri}${api.credentials}`)
                axios.get(`${uri}${api.credentials}`)
                    .then( response => {
                        //console.log("fetchMarvel resp => ",response.data?.data?.results[0])
                        setFreshData(response.data?.data?.results[0])
                    })
                    .catch(e => {
                        return Promise.reject(
                            new Error(`erreur lors de la requete : ${e}`),
                        )
                    })
            }
    }, [allowFetching])
    
    
    
    
    return (
        <div className={cardStyle[item.subCatIndex].main}
             onClick={() => {
                 setItem(item => ({...item, ...{marvelId: id}, ...{catIndex: item.subCatIndex}, ...{subCatIndex: -1}}))
             }}
        >
            <div className={`flex border-b`}>
                <div className={`p-2 shrink-0`}>
                    <div className={cardStyle[item.subCatIndex].img}>
                        <img src={(freshData && freshData.thumbnail) ? `${freshData.thumbnail?.path}.${freshData.thumbnail?.extension}` : noImgSrc}
                             alt={name} className={`bg-dark border-none`}/>
                    </div>
                </div>
                <p className={cardStyle[item.subCatIndex].title}>
                    {name}
                </p>
            </div>
            <div className={cardStyle[item.subCatIndex].bottom}>
                <div className={`flex justify-start`}>
                    <p className={`uppercase mr-1`}>Date :</p>
                    <p className={``}>{ freshData?.modified && freshData?.modified[0] !== '-' ? (freshData?.modified).substring(0,10) : "?" }</p>
                </div>
                <div className={`flex justify-start justify-self-end`}>
                    <p className={`uppercase text-2xs mr-1`}>marvel id: </p>
                    <p className={`text-lime text-2xs`}>{id}</p>
                </div>
                <div className={`flex justify-self-end`}>
                    <a className={`normal-case hover:text-teal`}>MM</a>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Card)