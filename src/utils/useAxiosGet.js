import {useEffect, useReducer} from "react";


const axiosReducer = (state, action) => {
    switch (action.type) {
        case 'fetching':
            return {data: null, error: null}    // add status: 'fetching'
        case 'done':
            return {data: action.payload, error: null}  // add status: 'responded'
        case 'fail':
            return {data: null, error: action.error}    // add status: ?
        default:
            throw new Error('Action non supporté')
    }
}

export default function useAxiosGet(url, ...queryParam) {
    const [state, dispatch] = useReducer(axiosReducer, {
        data: null,
        //status: null,
        error: null
    }, a=>a)
    
    useEffect(()=> {
        if (!url) { return }
        
        dispatch({type: 'fetching'})
        
        console.log(url, ...queryParam)
        
        // eslint-disable-next-line
    }, [url, queryParam])
    
    return state
}


// ADD TO APP :
/*
*     const {data, error} = useAxiosGet(api.url.concat(categories[catIndex || 0].name), api.credentials, '&offset=${pageOffset}' )
* */