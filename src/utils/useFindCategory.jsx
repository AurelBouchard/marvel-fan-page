import {useCallback} from "react";
import useAxiosGet from "./useAxiosGet";



export default function useFindCategory(param) {
    const cb = useCallback(()=> {
        if (!param) { return }
        return useAxiosGet(param)
    }, [param])
    
    return useAxiosGet(cb)
}