import {useEffect, useReducer} from "react";
import axios from "axios";
import {api} from "../credentials";
import {categories} from "../models/categories";


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

export default function useAxiosGet(param) {
    const [state, dispatch] = useReducer(axiosReducer, {
        data: null,
        //status: null,
        error: null
    }, a=>a)
    
    //useEffect(()=> {
        
        dispatch({type: 'fetching'})
        
        console.log("useAxiosGet callback")
        
        //`${api.url}${categories[catIndex||0].name}${api.credentials}&offset=${pageOffset}`
        axios.get(param)
            .then( response => {
                console.log("catResult => ",response.data?.data?.results)
                //setCatResult(response.data?.data?.results)
            } ).catch(err => {
                console.log("error while fetching data :", err)
            })
        
        // eslint-disable-next-line
    //}, [param])
    
    return state
}