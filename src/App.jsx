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
export let appParams = {
    categories: categories,
    listSize: 20
}

export const AppParam = createContext(appParams)

// fucking don't work
/*function AppParamProvider() {
    const [params, setter] = useState(appParams)
    const value = [params, setter]
    
    return <AppParam.Provider value={value} />
}*/

// default item
export let item = {
    marvelId: null,
    catIndex: 0,
    subCatIndex: -1,
    data: null
}

export const ItemContext = createContext(item)


// default category
export let category = {
    data: null,
    pageOffset: 0
}

export const CategoryContext = createContext(category)


function App() {
    
    // would be managed by 'contextProvider()'
    const [params, setParams] = useState(appParams)
    const paramValue = [params, setParams]
    const [currentItem, setCurrentItem] = useState(item)
    const itemValue = [currentItem, setCurrentItem]
    const [workingCategory, setWorkingCategory] = useState(category)
    const categoryValue = [workingCategory, setWorkingCategory]
    
    //console.log("apéro !")
    
    

    
    useEffect(() => {
        setWorkingCategory(category => ({data: null, pageOffset:0}))
    }, [currentItem.catIndex])
    
    useEffect(()=> {
        //setCatResult(null)
        setWorkingCategory(category => ({...category, ...{data: null}}))
    }, [category.pageOffset])
    
    /**
     * http request the API each time a new category is selected in the header
     * or pageOffset change
     */
    useEffect(()=> {
        //console.log("refresh data ?", item.catIndex)
        if (category.data) {return}
        refreshCatResult()
    }, [currentItem.catIndex, workingCategory.pageOffset ])
    
    function refreshCatResult() {
        //console.log("refresh data")
    
        // renew results
        axios.get(`${api.url}${params.categories[currentItem.catIndex||0].name}${api.credentials}&offset=${workingCategory.pageOffset}`)
            .then( response => {
                //console.log("new data => ",response.data?.data?.results)
                let newData = response.data?.data?.results
                setWorkingCategory(category => ({...category, ...{data: newData}}))
            } ).catch(err => {
                console.log("error while fetching data :", err)
        })
    }
    
    

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
                </ItemContext.Provider>
        
                <Footer/>
            </AppParam.Provider>
        </div>
    )
}


export default App
