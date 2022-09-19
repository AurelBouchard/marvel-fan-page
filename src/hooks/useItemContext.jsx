import React, {useContext} from 'react';

// data
import {ItemContext} from "../App";
import {defaultItem as fallback} from "../App";

// helper
import isIterable from "../utils/isIterable";


export default function useItemContext(callerName) {
    //console.log("useItemContext by", callerName || 'any')
    const context = useContext(ItemContext)
    
    if (!isIterable(context)) {
        console.log("component is out of ItemContextProvider")
        return fallback
    }
    
    return context
}