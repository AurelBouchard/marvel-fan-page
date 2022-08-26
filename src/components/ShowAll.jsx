import React, {useEffect, useState} from 'react';
import Loading from "./Loading";
import {api} from "../credentials";
import {categories} from "../models/categories";
import axios from "axios";

export default function ShowAll({
                                    catName,
                                    pageOffset,
                                    setPageOffset,
                                    setMarvelId, setItemCat,
                                    dico, catIndex, listSize
}) {
    const [catResult, setCatResult] = useState([])
    const [list, setList] = useState(nullArray(listSize))
    const [dicoCatSize, setDicoCatSize] = useState(0)
    
    
    useEffect(()=> {
        if (dico) { setDicoCatSize(dico[catIndex].length )}
    }, [])
    
    useEffect(()=> {
        if (dico) {setList(dico[catIndex].slice(pageOffset,pageOffset+listSize)) }
    }, [dico, catIndex, pageOffset])
    

    useEffect(() => {
        setPageOffset(0)
    }, [catIndex])
    
    /**
     * check if dico is full
     */
    function handleNextPage() {
        if (pageOffset+listSize > dicoCatSize) {
            // need fetch
        } else {
            setPageOffset(Math.min(dicoCatSize, pageOffset+listSize))
        }
    }
    
    function refreshCatResult() {
        if (!catResult) {
            console.log("refreshCatResult")
            // purge old results
            //setCatResult(null)
            
            console.log("ask api : ",`${api.url}${categories[catIndex].name}?apikey=${api.pubKey}&hash=${api.hash}&ts=${api.ts}&offset=${pageOffset}`)
            
            // renew results
            axios.get(`${api.url}${categories[catIndex].name}${api.credentials}&offset=${pageOffset}`)
                .then( response => {
                    console.log("catResult => ",response.data?.data?.results)
                    setCatResult(response.data?.data?.results)
                } ).catch(err => {
                console.log("error while fetching data :", err)
            })
        }
    }
    
    
    
    console.log("show all")
    
    function nullArray(n) {
        return new Array(n)
    }
    
    
    return (
        <div className="bg-dark rounded-xl p-4 flex flex-col ">
            <p className={`uppercase font-bold pb-4`}>all {catName}</p>
    
            {!list || !list[0] ? <Loading/> : null}
            {list?.map((elt, index) => {
                return (
                    <p key={index}
                        className={`uppercase font-light text-sm rounded pl-2 py-0.5
                hover:bg-teal hover:text-dark-darkest hover:font-bold hover:normal-case cursor-pointer
                transition-h delay-0 duration-700 text-ellipsis overflow-hidden break-normal
                ${elt ? 'h-6 animate-appear bg-grey-slate mb-px' : 'h-0 duration-0 animate-none bg-none -mb-1 h-0'}
                `}
                        onClick={() => {
                            console.log("select an item in show all")
                            setMarvelId(elt.id);
                            setItemCat(catName);
                        }}
                    >
                        {elt.name || elt.title || elt.fullName}
                    </p>
                )
                
            })}
            
            
            <div className={`flex justify-center items-center text-lime pt-2`}>
                <div id="previousPage"
                     onClick={(e)=>{
                         e.preventDefault()
                         setPageOffset(Math.max(0, pageOffset-listSize))
                         setList(nullArray(listSize))
                }}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 12L18.25 5.75V18.25L9.75 12Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 5.75V18.25"/>
                    </svg>
                </div>
                
                <p className={`text-sm pb-0.5 mx-1`}>{`${pageOffset+1} ... ${Math.min(dicoCatSize, pageOffset+listSize)}`}</p>
                
                <div id="nextPage" onClick={(e)=>{
                    e.preventDefault()
                    handleNextPage()
                    setList(nullArray(listSize))
                }}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 12L5.75 5.75V18.25L14.25 12Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 5.75V18.25"/>
                    </svg>
                </div>
            </div>
            
        </div>
    )
}