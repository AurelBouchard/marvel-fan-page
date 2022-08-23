import React, {useEffect, useState} from 'react';
import Loading from "./Loading";

export default function ShowAll({
                                    catName,
                                    listOfAllItems,
                                    pageOffset,
                                    setPageOffset,
                                    setMarvelId, setItemCat}) {
    
    const [list, setList] = useState(emptyArrayOfN(20))
    
    useEffect(()=> {
        if (listOfAllItems) {setList(listOfAllItems)}
    }, [listOfAllItems])
    
    
    console.log("show all : ", listOfAllItems)
    
    function emptyArrayOfN(n) {
        const arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        //for(let i=0; i<n; i++) {arr.push(null)}
        return arr
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
                <div id="previousPage" onClick={()=>{
                    setPageOffset(Math.max(0, pageOffset-20))
                    setList(emptyArrayOfN(20))
                }}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 12L18.25 5.75V18.25L9.75 12Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 5.75V18.25"/>
                    </svg>
                </div>
                <p className={`text-sm pb-0.5 mx-1`}>{`${pageOffset+1} ... ${pageOffset+20}`}</p>
                <div id="nextPage" onClick={()=>{
                    setPageOffset(Math.min(100000, pageOffset+20))
                    setList(emptyArrayOfN(20))
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