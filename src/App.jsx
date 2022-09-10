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


function App() {
    
    // would be managed by 'contextProvider()'
    const [params, setParams] = useState(appParams)
    const paramValue = [params, setParams]
    const [currentItem, setCurrentItem] = useState(item)
    const itemValue = [currentItem, setCurrentItem]
    
    // item context
    const [catIndex, setCatIndex] = useState(0)         // in header {number}
    const [searchResult, setSearchResult] = useState(null)  // {object}
    const [marvelId, setMarvelId] = useState(null)      // {number}
    const [itemCatName, setItemCatName] = useState(null)    // catName {string}
    
    
    // view context
    const [subCatIndex, setSubCatIndex] = useState(-1)   // in sidebar {number}
    const [catResult, setCatResult] = useState()
    const [pageOffset, setPageOffset] = useState(0)     // {number}
    
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
        if (item.marvelId) {
            console.log("specific call with marvel ID")
            axios.get(`${api.url}${categories[catIndex].name}/${item.marvelId}${api.credentials}`)
                .then( response => {
                    console.log("searchResult => ",response.data?.data?.results[0])
                    setSearchResult(response.data?.data?.results[0])
                } )
    
            // set view to top of overview
            setSubCatIndex(-1)
            window.scrollTo(0, 0);
            
        }
    },[item.marvelId])

    
    return (
        <div id="wholePage" className="text-grey animate-appear text-left">
            <AppParam.Provider value={paramValue}>
                <ItemContext.Provider value={itemValue}>
                    <Header catIndex={catIndex || 0} setCatIndex={setCatIndex}
                        //dico={dico}
                        //setMarvelId={setMarvelId} => ItemContext
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
                                //setMarvelId={setMarvelId} => ItemContext
                                      itemCatName={itemCatName}
                                      setItemCatName={setItemCatName}
                
                            />
{/*                            <LinksAndMore setPageOffset={setPageOffset}
                                          pageOffset={pageOffset}
                                //setMarvelId={setMarvelId} => ItemContext
                                          setItemCatName={setItemCatName}
                                //dico={dico} setDico={setDico}
                                          catIndex={catIndex} itemCatName={itemCatName}
                                          listOfAllItems={catResult}
                
                            />*/}
                        </MainContainer>
        
                    </main>
                </ItemContext.Provider>
        
                <Footer/>
            </AppParam.Provider>
        </div>
    )
}


export default App
