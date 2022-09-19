import React, {createContext, useEffect, useState} from 'react'
import axios from "axios";

// styling
import './App.css'

// helpers
import {categories} from "./models/categories";
import {api} from "./credentials";

// components
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainView from "./components/MainView";
import MainContainer from "./components/MainContainer";
import LinksAndMore from "./components/LinksAndMore";
import Footer from "./components/Footer";


// default parameters
export let defaultAppParams = {
    categories: categories,
    listSize: 20
}

export const AppParam = createContext(defaultAppParams)

// fucking don't work
/*function AppParamProvider() {
    const [params, setter] = useState(appParams)
    const value = [params, setter]
    
    return <AppParam.Provider value={value} />
}*/

// default item
export let defaultItem = {
    marvelId: null,
    catIndex: 0,
    subCatIndex: -1,
    data: null
}

export const ItemContext = createContext(defaultItem)


// default category
export let defaultCategory = {
    data: null,
    pageOffset: 0
}

export const CategoryContext = createContext(defaultCategory)


function App() {
    
    // would be managed by 'contextProvider()'
    const [params, setParams] = useState(defaultAppParams)
    const paramValue = [params, setParams]
    const [currentItem, setCurrentItem] = useState(defaultItem)
    const itemValue = [currentItem, setCurrentItem]
    const [workingCategory, setWorkingCategory] = useState(defaultCategory)
    const categoryValue = [workingCategory, setWorkingCategory]
    
    //console.log("apéro !")
    
    
    /**
     * When choosing an item from a other category or directly change category
     * then refresh list of items
     */
    useEffect(() => {
        setWorkingCategory(defaultCategory)
        refreshCatResult()
    }, [currentItem.catIndex])
    
    /**
     * When browsing list of items with Next/previous buttons
     * then refresh list of items
     */
    useEffect(()=> {
        setWorkingCategory(category => ({...category, ...{data: null}}))
        refreshCatResult()
    }, [workingCategory.pageOffset])
    
    
    /**
     * SIDE EFFECT
     * Fetch Marvel API with category name, pageOffset (page limit ?)
     * then set CategoryContext with new data
     */
    function refreshCatResult() {
        //console.log("refresh data")
        
        axios.get(`${api.url}${params.categories[currentItem.catIndex||0].name}${api.credentials}&offset=${workingCategory.pageOffset}`)
            .then( response => {
                //console.log("new data => ",response.data?.data?.results)
                let newData = response.data?.data?.results
                setWorkingCategory(category => ({...category, ...{data: newData}}))
            } ).catch(err => {
                console.log("error while fetching data :", err)
        })
    }
    
    
    /**
     * When selecting an item
     * then fetch Marvel API with category name and id
     * then set ItemContext with new data
     */
    useEffect(() => {
        if (currentItem.marvelId) {
            //console.log("specific call with marvel ID")
            axios.get(`${api.url}${params.categories[currentItem.catIndex].name}/${currentItem.marvelId}${api.credentials}`)
                .then( response => {
                    //console.log("searchResult => ",response.data?.data?.results[0])
                    let newData = (response.data?.data?.results[0])
                    setCurrentItem(item => ({...item, ...{subCatIndex: -1}, ...{data: newData}}))
                } )
    
            window.scrollTo(0, 0);
        }
    },[currentItem.marvelId])

    
    return (
        <div id="wholePage" className="text-grey animate-appear text-left">
            <AppParam.Provider value={paramValue}>
                <ItemContext.Provider value={itemValue}>
                    <Header />
        
                    <main className="flex w-full relative">
            
                        <SideBar />
            
                        <MainContainer>
                            <MainView />
                            <CategoryContext.Provider value={categoryValue}>
                                <LinksAndMore />
                            </CategoryContext.Provider>
                        </MainContainer>
        
                    </main>
    
                    <Footer/>
                </ItemContext.Provider>
            </AppParam.Provider>
        </div>
    )
}


export default App
