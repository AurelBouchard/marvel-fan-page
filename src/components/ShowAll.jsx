import React, {useEffect, useState} from 'react';

// contexts
import useAppParam from "../hooks/useAppParam";
import useItemContext from "../hooks/useItemContext";
import useCategoryContext from "../hooks/useCategoryContext";

// components
import Loading from "./Loading";



function ShowAll({//dico, setDico
 }) {
    //console.log("ShowAll", category.data)
    
    // USE CONTEXTS
    const [appParam, setAppParam] = useAppParam("ShowAll")
    const [item, setItem] = useItemContext("ShowAll")
    const [category, setCategory] = useCategoryContext("ShowAll")
    // shortcuts
    const catName = appParam.categories[item.catIndex || 0].name;
    const listSize = appParam.listSize
    
    // INTERNAL STATES
    const [list, setList] = useState(nullArray(listSize))
    //const [dicoCatSize, setDicoCatSize] = useState(0)
    
    function nullArray(n) { return new Array(n) }
    
    
    useEffect(()=> {
        //console.log("category.data",category.data)
        setList(category.data)
    }, [category.data, item.catIndex])
    
    // go on top of list if category of item changes
    useEffect(() => {
        setCategory(category => ({...category, ...{pageOffset: 0}}))
    }, [item.catIndex])
    
    
    
    return (
        <div className="bg-dark rounded-xl p-4 flex flex-col ">
            <p className={`uppercase font-bold pb-4`}>other {catName}</p>
            
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
                            //console.log("select an item in show all")
                            setItem(item => ({...item, ...{marvelId: elt.id}}))
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
                         setCategory(cat => ({...cat, ...{pageOffset: Math.max(0, category.pageOffset-20)}}))
                        setList(nullArray(20))
                    }}
                >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 12L18.25 5.75V18.25L9.75 12Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 5.75V18.25"/>
                    </svg>
                </div>
    
                <p className={`text-sm pb-0.5 mx-1`}>{`${category.pageOffset+1} ... ${Math.min(100000, category.pageOffset+listSize)}`}</p>
    
                <div id="nextPage"
                     onClick={(e)=>{
                        e.preventDefault()
                         setCategory(cat => ({...cat, ...{pageOffset: Math.min(100000000, category.pageOffset+20)}}))
                        setList(nullArray(20))
                    }}
                >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 12L5.75 5.75V18.25L14.25 12Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 5.75V18.25"/>
                    </svg>
                </div>
            </div>
            
        </div>
    )
}

export default React.memo(ShowAll)