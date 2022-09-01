import {useCallback} from "react";
import useAxiosGet from "./useAxiosGet";



export default function useFindCategory(param) {
    const cb = useCallback(()=> {
        if (!param) { return }
        return new Promise(()=>{})
    }, [param])
    
    return useAxiosGet(cb)
}