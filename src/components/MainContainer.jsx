import React from 'react';
import Reminder from "./Reminder";

export default function MainContainer({children}) {
    
    
    return (
        <div className="flex flex-col flex-1 md:flex-row md:flex-auto p-2 pt-0 md:p-8 md:pt-0 gap-6 z-10">
            
            <Reminder />
            
            {children}
        </div>
    )
}