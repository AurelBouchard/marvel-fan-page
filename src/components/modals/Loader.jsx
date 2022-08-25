import React, {useEffect, useState} from 'react';
import {api} from "../../credentials";
import axios from "axios";



export default function Loader({categories, setReady, ready, setNVAM, NVAM, setDico}) {
    const [tempDico, setTempDico] = useState([]);
    
    useEffect(()=> {
        //console.log("comparing length",categories.length, tempDico.length )
        if (categories.length === tempDico.length) {
            setDico(tempDico)
        }
    }, [tempDico])
    
    // not virgin anymore
    useEffect(() => {
        if (!NVAM) {setTimeout(()=>{setNVAM(true)},0)}
    })
    
    
    useEffect(()=> {
        if (NVAM && !ready) {
            console.log("call a very long function")
            
            async function createAllDicos() {
                for (let i = 0; i < categories.length; i++) {
                    await createDico(categories[i].name)
                }
            }
            
            createAllDicos()
                .then(()=>{console.log("*****************************************")})
                .catch((err) => {console.log("something fuck'd up", err)})
            
        }
    }, [NVAM])  // don't change dep
    
    
    
    /**
     *
     * @param catName
     * @returns {Promise<void>}
     */
    async function createDico(catName) {
        let security = api.security;
        let fetchLimit = api.fetchLimit;
        const bunchSize = 100;  // maxi : 100
        let dicoPart = [];  // = [{name: 'itemName', id:'marlId'}...{}]
        let full = true;
        let offset = 0;
        
        
        /**
         * Give a bunch of data and if the length is equal to limit (full)
         * Full mean that an order request can be performed after increment of offset
         *
         * @param catName
         * @param pageOffset
         * @returns {Promise<{isFull: boolean, bunch: *}>}
         */
        let getBunch = async function (catName, pageOffset) {
            if (security) {
                security--;
                //console.log("fetchCategory", catName, security)
                console.log(`${api.url}${catName}${api.credentials}&offset=${pageOffset}&limit=${bunchSize}`)
                return await axios.get(`${api.url}${catName}${api.credentials}&offset=${pageOffset}&limit=${bunchSize}`)
                    .then(response => {
                        let result = response.data?.data?.results;
                        let needOfFetch = response.data?.data?.total / bunchSize;
                        console.log("need of fetch", needOfFetch)
                        let full = true;
                        //console.log("results of", catName, result)
                        if (result.length !== bunchSize  || needOfFetch > fetchLimit) {
                            full = false
                        }
                        return {isFull: full, bunch: result}
                    })
                    .catch(err => {
                        console.log("error while fetching data :", err)
                    })
            }
        }
        
        /**
         * Extract useful data from raw bunch
         *
         * @param bunch
         * @returns {Promise<*>}
         */
        let extractData = async function (bunch) {
            return await bunch.map(item => {
                return {id: item.id, name: item.name || item.title || item.fullName}
            })
        }
        
        /*    /!**
             * Concat arrays as async function
             *
             * @param arr
             * @param add
             * @returns {Promise<*>}
             *!/
            let concaten = async function (arr =[], add=[]) {
                console.log("concat",arr,add)
                let output = []
                await arr.forEach(elt => output.push(elt))
                await add.forEach(elt => output.push(elt))
                return output
            }*/
        
        
        /**
         * Fetch bunch of data and concat it to dicoPart array
         *
         * @param catName
         * @param offset
         * @param bunchSize
         * @returns {Promise<void>}
         */
        let getAllOfOneCategory = async function(catName, offset, bunchSize) {
            await getBunch(catName, offset)
                .then(res => {
                    offset += bunchSize;
                    full = res.isFull;
                    //console.log(res.bunch)
                    return extractData(res.bunch)
                })
                .then((array) => {
                    dicoPart = dicoPart.concat(array)
                    return dicoPart
                })
                .then((dico)=> {
                    //console.log("dico", dico)
                })
                .catch(err => console.log(err))
        }
        
        let i = 100
        while (full && i) {
            //console.log("while full")
            await getAllOfOneCategory(catName, offset, bunchSize)
            offset += bunchSize;
            i--
        }
        
        
        console.log("end of this cat", catName)
        setTempDico((d) => [...d, dicoPart])
    }
    
    return (
        <div className={`h-screen w-screen fixed top-0 left-0 md:flex justify-center items-center animate-appear-slow z-100`}>
            <img src='../../src/assets/short_comp.webp' alt="" className={`flex-1 md:hidden`}/>
            <img src='../../src/assets/full_no_loss.webp' alt="" className={`flex-1 hidden md:block`}/>
        </div>
    )
}


