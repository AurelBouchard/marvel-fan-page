import React, {useState} from 'react';

export default function ErrorMessage({errorMessage}) {
    const [showDetail, setShowDetail] = useState(true)
    

    
    return (
        <div className={`m-2 p-4 bg-black`}>
            <p className={`text-red-600 mb-2`}>{errorMessage.main}</p>
            <div className={`cursor-pointer`}
/*                 onClick={(e)=>{
                     e.preventDefault()
                     setShowDetail(!showDetail)
                 }}*/
            >
                <span>Details {showDetail ? ':' : '...'}</span>
                <p className={showDetail ? 'block' : 'hidden'}>
                    {errorMessage.details.toString()}
                </p>
            </div>
        </div>
    )
}