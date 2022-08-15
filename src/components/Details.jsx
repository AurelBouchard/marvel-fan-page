import React from 'react';

/**
 * Show some data of the selected item :
 * name, photo,
 *
 * @param searchResult
 * @returns {JSX.Element}
 * @constructor
 */
export default function Details({searchResult, marvelId}) {
    
    console.log("details searchResult : ",searchResult)
    console.log("details marvelId : ",marvelId)
    
    
    
    
    
    const alternative = <div className={`flex justify-between items-center`}>
        <p>Please select an item</p>
        <div>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"/>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H4.75"/>
            </svg>
        </div>
    </div>
    
    return (
        <div className={`flex flex-col flex-auto w-36`}>
            <div className="bg-dark rounded-xl p-4">
                {searchResult ? searchResult.toString() : alternative}
            </div>
            <div className={`flex-1`}/>
        </div>
    )
}