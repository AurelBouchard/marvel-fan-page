import React, {useContext} from 'react';
import {AppParam} from "../App";
import {appParams as fallback} from "../App";
import isIterable from "../utils/isIterable";


export default function useAppParam(callerName) {
    //console.log("useParam by", callerName || 'any')
    const context = useContext(AppParam)
    
    if (!isIterable(context)) {
        console.log("component is out of AppParamProvider")
        return fallback
    }
    
    return context
}