import React from 'react';

export default function Rating({data}) {
    
    return (
        <div className="bg-dark rounded-xl p-4">
            <p className={`uppercase font-bold`}>rating</p>
            <div>
                {data}
            </div>
        </div>
    )
}