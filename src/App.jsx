import React, {createContext, useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainView from "./components/MainView";
import MainContainer from "./components/MainContainer";
import LinksAndMore from "./components/LinksAndMore";
import Footer from "./components/Footer";
import {categories} from "./models/categories";
import axios from "axios";
import {api} from "./credentials";

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
    data: null
}

export const ItemContext = createContext(null)


// default view
export let view = {

}


function App() {
    
    // would be managed by 'contextProvider()'
    const [params, setParams] = useState(appParams)
    const paramValue = [params, setParams]
    const [currentItem, setCurrentItem] = useState(item)
    const itemValue = [currentItem, setCurrentItem]
    
    // item context
    //const [catIndex, setCatIndex] = useState(0)         // in header {number}
    //const [searchResult, setSearchResult ] = useState(null)  // {object}
    //const [marvelId, setMarvelId] = useState(null)      // {number}
    //const [itemCatName, setItemCatName] = useState(null)    // catName {string}
    
    // subcat context
    const [subCatIndex, setSubCatIndex] = useState(-1)   // in sidebar {number}
    
    // cat context
    const [catResult, setCatResult] = useState()
    const [pageOffset, setPageOffset] = useState(0)     // {number}
    
    //const [NVAM, setNVAM] = useState(false)     // boolean
    //const [dico, setDico] = useState(null)      // [[{object}...{}]...[]]
    
    //const listSize = 20; // now in context
    
    console.log("apéro !")
    
    

    
    useEffect(() => {
        setPageOffset(0)
        setCatResult(null);
    }, [currentItem.catIndex])
    
    useEffect(()=> {
        setCatResult(null)
    }, [pageOffset])
    
    /**
     * http request the API each time a new category is selected in the header
     * or pageOffset change
     */
    useEffect(()=> {
        if (catResult) {return}
        refreshCatResult()
    }, [catResult])
    
    function refreshCatResult() {
        //if (!catResult) {
            console.log("refreshCatResult")
            // purge old results
            //setCatResult(null)
    
            //console.log("ask api : ",`${api.url}${categories[item.catIndex].name}?apikey=${api.pubKey}&hash=${api.hash}&ts=${api.ts}&offset=${pageOffset}`)
    
            // renew results
            axios.get(`${api.url}${params.categories[currentItem.catIndex||0].name}${api.credentials}&offset=${pageOffset}`)
                .then( response => {
                    console.log("catResult => ",response.data?.data?.results)
                    setCatResult(response.data?.data?.results)
                } ).catch(err => {
                    console.log("error while fetching data :", err)
            })
        //}
    }
    
    

    useEffect(() => {
        if (currentItem.marvelId) {
            console.log("specific call with marvel ID")
            console.log(currentItem.catIndex)
            console.log(currentItem.marvelId)
            //console.log(params.categories)
            axios.get(`${api.url}${params.categories[currentItem.catIndex].name}/${currentItem.marvelId}${api.credentials}`)
                .then( response => {
                    console.log("searchResult => ",response.data?.data?.results[0])
                    let newData = (response.data?.data?.results[0])
                    setCurrentItem(item => ({...item, ...{data: newData}}))
                } )
    
            // set view to top of overview
            setSubCatIndex(-1)
            window.scrollTo(0, 0);
            
        }
    },[currentItem.marvelId])

    
    return (
        <div id="wholePage" className="text-grey animate-appear text-left">
            <AppParam.Provider value={paramValue}>
                <ItemContext.Provider value={itemValue}>
                    <Header
                        //catIndex={catIndex || 0} => ItemContext
                        // setCatIndex={setCatIndex} => ItemContext
                        //dico={dico}
                        //setMarvelId={setMarvelId} => ItemContext
                        // setItemCatName={setItemCatName} => ItemContext
                    />
        
                    <main className="flex w-full relative">
            
                        <SideBar
                            //itemCatName={itemCatName} => ItemContext
                            // searchResult={searchResult} => ItemContext
                            subCatIndex={subCatIndex} setSubCatIndex={setSubCatIndex}
                        />
            
                        <MainContainer>
                            <MainView
                                //searchResult={searchResult} => ItemContext
                                //setCatIndex={setCatIndex} => ItemContext
                                //setMarvelId={setMarvelId} => ItemContext
                                // itemCatName={itemCatName} => ItemContext
                                // setItemCatName={setItemCatName} => ItemContext
                                subCatIndex={subCatIndex}
                            />
                            <LinksAndMore
                                //setMarvelId={setMarvelId} => ItemContext
                                // setItemCatName={setItemCatName} => ItemContext
                                //dico={dico} setDico={setDico}
                                // catIndex={catIndex} => ItemContext
                                // itemCatName={itemCatName} => ItemContext
                                setPageOffset={setPageOffset}
                                pageOffset={pageOffset}
                                listOfAllItems={catResult}
                            />
                        </MainContainer>
        
                    </main>
                </ItemContext.Provider>
        
                <Footer/>
            </AppParam.Provider>
        </div>
    )
}


export default App
