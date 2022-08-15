import React from 'react';

export default function ShowAll({catName, listOfAllItems, pageOffset, setPageOffset, setMarvelId}) {
    
    console.log("show all : ", listOfAllItems)
    
    return (
        <div className="bg-dark rounded-xl p-4">
            <p className={`uppercase font-bold pb-4`}>all {catName}</p>
            {listOfAllItems?.map((elt, index)=> {
                return (
                    <div key={index}
                         className={`uppercase font-light text-sm bg-grey-slate rounded mb-px pl-2 py-0.5
                    hover:bg-teal hover:text-dark-darkest hover:font-bold
                    cursor-pointer`}
                         onClick={()=> {setMarvelId(elt.id)}}
                    >
                        {elt.name || elt.title || elt.fullName}
                    </div>
                )
            })}
            
            <div className={`flex justify-center items-center text-lime pt-2`}>
                <div id="previousPage" onClick={()=>{setPageOffset(Math.max(0, pageOffset-20))}}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 12L18.25 5.75V18.25L9.75 12Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 5.75V18.25"/>
                    </svg>
                </div>
                <p className={`text-sm pb-0.5 mx-1`}>{`${pageOffset+1} ... ${pageOffset+20}`}</p>
                <div id="nextPage" onClick={()=>{setPageOffset(Math.min(100000, pageOffset+20))}}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 12L5.75 5.75V18.25L14.25 12Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 5.75V18.25"/>
                    </svg>
                </div>
            </div>
            
        </div>
    )
}