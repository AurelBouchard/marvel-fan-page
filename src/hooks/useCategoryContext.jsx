import React, {useContext} from 'react';

// data
import {CategoryContext} from "../App";
import {defaultCategory as fallback} from "../App";

// helper
import isIterable from "../utils/isIterable";


export default function useCategoryContext(callerName) {
    //console.log("useItemContext by", callerName || 'any')
    const context = useContext(CategoryContext)
    
    if (!isIterable(context)) {
        console.log("component is out of CategoryContextProvider")
        return fallback
    }
    
    return context
}