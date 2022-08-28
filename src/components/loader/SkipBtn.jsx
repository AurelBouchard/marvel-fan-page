import React, {useState} from 'react';

export default function SkipBtn({setSkipped, skipped}) {
    
    return (
        <div className={`rounded-full text-teal border-teal border p-4 m-4 ${skipped ? 'bg-grey-slate' : 'hover:text-dark-darkest'}`}
             onClick={()=> {
                 console.log("skip")
                 setSkipped(true)
             }}
        >
            SKIP
        </div>
    )
}