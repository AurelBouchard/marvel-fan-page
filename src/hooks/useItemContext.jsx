import React, {useContext} from 'react';
import {ItemContext} from "../App";
import {item as fallback} from "../App";
import isIterable from "../utils/isIterable";


export default function useItemContext(callerName) {
    console.log("useItemContext by", callerName || 'any')
    const context = useContext(ItemContext)
    
    if (!isIterable(context)) {
        console.log("component is out of ItemContextProvider")
        return fallback
    }
    
    return context
}