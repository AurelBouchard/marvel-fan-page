import React from 'react';

export default function Stats({data}) {
    
    return (
        <div className="bg-dark rounded-xl p-4">
            <p className={`uppercase font-bold`}>stats</p>
            <div>
                {data}
            </div>
        </div>
    )
}