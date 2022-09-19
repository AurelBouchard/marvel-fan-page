import React, {useEffect, useState} from 'react';

// contexts
import useAppParam from "../../hooks/useAppParam";
import useItemContext from "../../hooks/useItemContext";

// components
import Card from "./Card";
import axios from "axios";
import {api} from "../../credentials";
import Loading from "../Loading";


/**
 * Will contain cards of related items
 * according to subCatIndex (view)
 *
 * @param gridData
 * @returns {JSX.Element}
 * @constructor
 */
function GridView({available, collectionURI}) {
    //console.log("GridView",JSON.stringify(gridData))
    
    // USE CONTEXTS
    const [appParam, setAppParam] = useAppParam("GridView")
    const [item, setItem] = useItemContext("GridView")
    // shortcuts
    const subCatName = appParam.categories[item.subCatIndex].name;
    
    // INTERNAL STATES
    const [freshData, setFreshData] = useState(null)
    const [collecPageOffset, setCollecPageOffset] = useState(0)
    
    const maxView = 24
    
    
    useEffect(() => {
        if (collectionURI) {
            // use https
            let uri = collectionURI;
            if (uri.indexOf('https')!==0) {
                uri = 'https'+collectionURI.substring(4)
            }
            
            //console.log(`fetching ${uri}${api.credentials}&offset=${collecPageOffset}&limit=${maxView}`)
            axios.get(`${uri}${api.credentials}&offset=${collecPageOffset}&limit=${maxView}`)
                .then( response => {
                    //console.log("fetchMarvel resp => ",response.data?.data?.results)
                    setFreshData(response.data?.data?.results)
                })
                .catch(e => {
                    return Promise.reject(
                        new Error(`erreur lors de la requete : ${e}`),
                    )
                })
        }
    }, [collectionURI])
    
    
    
    return (
        <div className={`mt-16 md:mt-12`}>
            <p className={`font-bold uppercase mb-4 md:mb-6`}>{available} {subCatName}</p>
            <div className={`grid grid-cols-1 ${item.catIndex===5 ? 'lg:grid-cols-1  xl:grid-cols-2 3xl:grid-cols-3' : 'lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4' } gap-4`}>

                {!freshData ? <Loading/> :
                    freshData.map((elt, index) => {
                        return (
                            <Card key={elt.id}
                                  data={elt}/>
                        )
                    })}
            </div>
        </div>
    )
}

export default React.memo(GridView)