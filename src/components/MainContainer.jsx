import React from 'react';

export default function MainContainer({children}) {
    
    return (
        <div className="flex flex-col flex-1 md:flex-row md:flex-auto p-2 md:p-8 gap-6 z-10">
            {children}
        </div>
    )
}