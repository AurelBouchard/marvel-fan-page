import React from 'react';
import Reminder from "./Reminder";

/**
 * Will contain Reminder, MainView and LinksAndMore
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function MainContainer({children}) {
    
    
    return (
        <div className="flex flex-col flex-1 md:flex-row md:flex-auto p-2 pt-0 md:p-8 md:pt-0 gap-6 z-0">
            
            <Reminder />
            
            {children}
        </div>
    )
}