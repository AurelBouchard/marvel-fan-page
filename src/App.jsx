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

export const appParams = {
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


function App() {
    const [catIndex, setCatIndex] = useState(0)         // in header {number}
    const [subCatIndex, setSubCatIndex] = useState(-1)   // in sidebar {number}
    const [searchResult, setSearchResult] = useState(null)  // {object}
    const [catResult, setCatResult] = useState()
    const [pageOffset, setPageOffset] = useState(0)     // {number}
    const [marvelId, setMarvelId] = useState(null)      // {number}
    const [itemCatName, setItemCatName] = useState(null)    // catName {string}
    
    //const [NVAM, setNVAM] = useState(false)     // boolean
    //const [dico, setDico] = useState(null)      // [[{object}...{}]...[]]
    
    //const listSize = 20; // now in context
    
    console.log("apéro !")
    
    

    
    useEffect(() => {
        setPageOffset(0)
        setCatResult(null);
    }, [catIndex])
    
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
    
            //console.log("ask api : ",`${api.url}${categories[catIndex].name}?apikey=${api.pubKey}&hash=${api.hash}&ts=${api.ts}&offset=${pageOffset}`)
    
            // renew results
            axios.get(`${api.url}${categories[catIndex||0].name}${api.credentials}&offset=${pageOffset}`)
                .then( response => {
                    console.log("catResult => ",response.data?.data?.results)
                    setCatResult(response.data?.data?.results)
                } ).catch(err => {
                    console.log("error while fetching data :", err)
            })
        //}
    }
    
    

    useEffect(() => {
        if (marvelId) {
            console.log("specific call with marvel ID")
            axios.get(`${api.url}${categories[catIndex].name}/${marvelId}${api.credentials}`)
                .then( response => {
                    console.log("searchResult => ",response.data?.data?.results[0])
                    setSearchResult(response.data?.data?.results[0])
                } )
    
            // set view to top of overview
            setSubCatIndex(-1)
            window.scrollTo(0, 0);
            
        }
    },[marvelId])
    
    // would be managed by AppParamProvider()
    const [params, setParams] = useState(appParams)
    const paramValue = [params, setParams]

    
    return (
        <div id="wholePage" className="text-grey animate-appear text-left">
            <AppParam.Provider value={paramValue}>
                <Header catIndex={catIndex || 0} setCatIndex={setCatIndex}
                        //dico={dico}
                        setMarvelId={setMarvelId}
                        setItemCatName={setItemCatName}
                />
                
            <main className="flex w-full relative">
            
                <SideBar subCatIndex={subCatIndex} setSubCatIndex={setSubCatIndex}
                         itemCatName={itemCatName}
                         searchResult={searchResult}
                />
            
                <MainContainer>
                    <MainView searchResult={searchResult}
                              subCatIndex={subCatIndex}
                              setCatIndex={setCatIndex}
                              setMarvelId={setMarvelId}
                              itemCatName={itemCatName}
                              setItemCatName={setItemCatName}
                    />
                    <LinksAndMore setPageOffset={setPageOffset}
                                  pageOffset={pageOffset}
                                  //catName={categories[catIndex || 0].name}
                                  setMarvelId={setMarvelId}
                                  setItemCatName={setItemCatName}
                                  //dico={dico} setDico={setDico}
                                  catIndex={catIndex} itemCatName={itemCatName}
                                  listOfAllItems={catResult}
                    />
                </MainContainer>
        
            </main>
        
                <Footer/>
            </AppParam.Provider>
        </div>
    )
}


export default App
