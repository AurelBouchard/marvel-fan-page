import React, {useEffect, useState} from 'react'
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
import Loader from "./components/modals/Loader";




function App() {
    const [catIndex, setCatIndex] = useState(0)         // in header {number}
    //const [userInput, setUserInput] = useState(null)
    const [subCatIndex, setSubCatIndex] = useState(null)   // in sidebar {number}
    const [searchResult, setSearchResult] = useState(null)  // {object}
    const [pageOffset, setPageOffset] = useState(0)     // {number}
    const [marvelId, setMarvelId] = useState(null)      // {number}
    const [itemCatName, setItemCatName] = useState(null)    // catName {string}
    
    const [NVAM, setNVAM] = useState(false)     // boolean
    const [dico, setDico] = useState(null)      // [[{object}...{}]...[]]
    
    const listSize = 20;
    
    console.log("apéro !")
    
    
    

    useEffect(() => {
        if (marvelId > 0) {
            console.log("specific call with marvel ID")
            console.log(`${api.url}${categories[catIndex].name}/${marvelId}${api.credentials}`)
            
            axios.get(`${api.url}${categories[catIndex].name}/${marvelId}${api.credentials}`)
                .then( response => {
                    console.log("searchResult => ",response.data?.data?.results[0])
                    setSearchResult(response.data?.data?.results[0])
                } )
            // NEED ERROR HANDLING !!!!!!!!!!!!!!!!!
    
            // set view to overview
            setSubCatIndex(0)
        }
    },[marvelId])
    
    
    
    return (

        !dico ? <Loader categories={categories}
                        NVAM={NVAM} setNVAM={setNVAM}
                        setDico={setDico}
            /> :
        
        <div id="wholePage" className="text-grey animate-appear">
            <Header categories={categories}
                    catIndex={catIndex} setCatIndex={setCatIndex}
                    dico={dico}
                    setMarvelId={setMarvelId}
            />
    
            <main className="flex w-full">
        
                <SideBar categories={categories}
                         subCatIndex={subCatIndex} setSubCatIndex={setSubCatIndex}
                         itemCat={itemCatName}
                         searchResult={searchResult}
                />
        
                <MainContainer>
                    <MainView searchResult={searchResult}
                              subCatIndex={subCatIndex}
                              setCatIndex={setCatIndex}
                              setMarvelId={setMarvelId}
                              itemCatName={itemCatName} setItemCatName={setItemCatName}
                    />
                    <LinksAndMore setPageOffset={setPageOffset}
                                  pageOffset={pageOffset}
                                  catName={categories[catIndex || 0].name}
                                  setMarvelId={setMarvelId}
                                  setItemCatName={setItemCatName}
                                  dico={dico} catIndex={catIndex} listSize={listSize}
                    />
                </MainContainer>
    
            </main>
    
            <Footer/>
        </div>
    )
}

export default App

