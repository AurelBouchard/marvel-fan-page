import React, {useEffect, useState} from 'react';

// contexts
import useAppParam from "../../hooks/useAppParam";
import useItemContext from "../../hooks/useItemContext";

// components
import noImgSrc from "../../assets/image_not_available.jpg"



function Card({data, latency}) {
    //console.log("card render", data)
    
    // USE CONTEXTS
    const [appParam, setAppParam] = useAppParam("Card")
    const [item, setItem] = useItemContext("Card "+data.id.toString())
    
    // INTERNAL STATES
    const [nOfLinks, setNOfLinks] = useState(null)
    
    const cardStyle = React.useMemo(()=> {
        return [
            {   // characters
                main:`uppercase flex flex-col space-between font-light text-sm bg-grey-slate transition-colors
                            rounded
                            hover:bg-grey-darker cursor-pointer
                            animate-appear`,
                img:`w-12 h-12 bg-dark border-none object-cover`,
                title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden max-h-12`,
                description:`normal-case truncate break-words m-2 mt-0 ml-4`,
                bottom:`flex w-full items-center border-t p-1 px-4 text-xs`
            },
            {   // comics
                main:`uppercase flex flex-col space-between font-light text-sm bg-grey-slate transition-colors
                            rounded
                            hover:bg-grey-darker cursor-pointer
                            animate-appear`,
                img:`w-12 h-12 bg-dark border-none object-cover`,
                title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden max-h-12`,
                description:`normal-case truncate break-words m-2 mt-0 ml-4`,
                bottom:`flex w-full items-center border-t p-1 px-4 text-xs`
            },
            {   // creators
                main:`uppercase flex flex-col space-between font-light text-sm bg-grey-slate transition-colors
                            rounded
                            hover:bg-grey-darker cursor-pointer
                            animate-appear`,
                img:`w-12 h-12 bg-dark border-none object-cover`,
                title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden max-h-12`,
                description:`normal-case truncate break-words m-2 mt-0 ml-4`,
                bottom:`flex w-full items-center border-t p-1 px-4 text-xs`
            },
            {   // events
                main:`uppercase flex flex-col space-between font-light text-sm bg-grey-slate transition-colors
                            rounded
                            hover:bg-grey-darker cursor-pointer
                            animate-appear`,
                img:`w-12 h-12 bg-dark border-none object-cover`,
                title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden max-h-12`,
                description:`normal-case truncate break-words m-2 mt-0 ml-4`,
                bottom:`flex w-full items-center border-t p-1 px-4 text-xs`
            },
            {   // series
                main:`uppercase flex flex-col space-between font-light text-sm bg-grey-slate transition-colors
                            rounded
                            hover:bg-grey-darker cursor-pointer
                            animate-appear`,
                img:`w-12 h-12 bg-dark border-none object-cover`,
                title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden max-h-12`,
                description:`normal-case truncate break-words m-2 mt-0 ml-4`,
                bottom:`flex w-full items-center border-t p-1 px-4 text-xs`
            },
            {   // stories
                main:`uppercase flex flex-col space-between font-light text-sm bg-grey-slate transition-colors
                            rounded
                            hover:bg-grey-darker cursor-pointer
                            animate-appear`,
                img:`w-12 h-12 bg-dark border-none object-cover`,
                title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden max-h-12`,
                description:`normal-case truncate break-words m-2 mt-0 ml-4`,
                bottom:`flex w-full items-center border-t p-1 px-4 text-xs`
            }
    ] }, [])

    
    useEffect(() => {
        let q=0
        if (nOfLinks === null) {
            appParam.categories.forEach(cat => {
                if (data[cat.name]?.available) {
                    q += data[cat.name].available
                }
            })
            setNOfLinks(q)
        }
    }, [])
    
    
    
    return (
        <div className={cardStyle[item.subCatIndex].main}
             onClick={() => {
                 setItem(item => ({...item, ...{marvelId: data.id}, ...{catIndex: item.subCatIndex}, ...{subCatIndex: -1}}))
             }}
        >
            <div className={`flex flex-1`}>
                <div className={`${item.subCatIndex===5 ? 'hidden' : 'block'} p-2 shrink-0`}>
                    <div className={`rounded overflow-hidden`}>
                        <img src={data.thumbnail ? `${data.thumbnail?.path}.${data.thumbnail?.extension}` : noImgSrc}
                             alt={data.name || data.title || data.fullName} className={cardStyle[item.subCatIndex].img}/>
                    </div>
                </div>
                <div className={`flex flex-col overflow-hidden`}>
                    <p className={cardStyle[item.subCatIndex].title}>
                        {data.name || data.title || data.fullName}
                    </p>
                    <p className={cardStyle[item.subCatIndex].description}>
                        {data.description ? data.description.substring(0,80) : null}
                    </p>
                </div>
            </div>
            <div className={cardStyle[item.subCatIndex].bottom}>
                <div className={`flex flex-1`}>
                    <p className={`uppercase mr-1`}>Date :</p>
                    <p className={``}>{ data?.modified && data?.modified[0] !== '-' ? (data?.modified).substring(0,10) : "?" }</p>
                </div>
                <div className={`flex mr-6`}>
                    <p className={`uppercase text-2xs mr-1`}>id: </p>
                    <p className={`text-lime text-2xs`}>{data.id}</p>
                </div>
                <div className={`flex`}>
                    <span className={`normal-case mr-1`}>Links</span>
                    <span className={`${nOfLinks > 20 ? 'text-lime' : (nOfLinks > 9 ? 'text-orange-500' : 'text-red-600') }`}>{nOfLinks}</span>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Card)