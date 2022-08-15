import React from 'react';

export default function MainContainer({children}) {
    
    return (
        <div className="flex flex-auto p-8 gap-6 text-left">
            {children}
        </div>
    )
}