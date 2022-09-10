import React, {useContext} from 'react';
import {AppParam} from "../App";
import {appParams as fallback} from "../App";
import isIterable from "../utils/isIterable";


export default function useAppParam(callerName) {
    //console.log("useParam by", callerName || 'any')
    const param = useContext(AppParam)
    
    if (!isIterable(param)) {
        console.log("composant hors du AppParamProvider")
        return fallback
    }
    
    return param
}