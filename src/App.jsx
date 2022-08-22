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




function App() {
    const [catIndex, setCatIndex] = useState(0)         // in header
    const [userInput, setUserInput] = useState(null)
    const [subCatIndex, setSubCatIndex] = useState(null)   // in sidebar
    const [catResult, setCatResult] = useState([])
    const [searchResult, setSearchResult] = useState(null)
    const [pageOffset, setPageOffset] = useState(0)
    const [marvelId, setMarvelId] = useState(null)
    const [itemCat, setItemCat] = useState(null)
    
    
    
    console.log("app et rot")
    
    /**
     * http request the API each time a new category is selected in the header
     * or pageOffset change
     */
    useEffect(()=> {refreshCatResult()})
    
    useEffect(() => {
        setPageOffset(0)
        setCatResult(null);
    }, [catIndex])
    
    useEffect(()=> {
        setCatResult(null)
    }, [pageOffset])
    
    function refreshCatResult() {
        if (!catResult) {
            console.log("refreshCatResult")
            // purge old results
            //setCatResult(null)
    
            console.log("ask api : ",`${api.url}${categories[catIndex].name}?apikey=${api.pubKey}&hash=${api.hash}&ts=${api.ts}&offset=${pageOffset}`)
    
            // renew results
            axios.get(`${api.url}${categories[catIndex].name}${api.credentials}&offset=${pageOffset}`)
                .then( response => {
                    console.log("catResult => ",response.data?.data?.results)
                    setCatResult(response.data?.data?.results)
                } ).catch(err => {
                    console.log("error while fetching data :", err)
            })
        }
    }
    
    

    useEffect(() => {
        if (marvelId) {
            console.log("specific call with marvel ID")
            axios.get(`${api.url}${categories[catIndex].name}/${marvelId}${api.credentials}`)
                .then( response => {
                    console.log("searchResult => ",response.data?.data?.results[0])
                    setSearchResult(response.data?.data?.results[0])
                } )
    
            // set view to overview
            setSubCatIndex(0)
        }
    },[marvelId])
    
    
    
    return (
        <div className="text-grey">
            
            <Header catIndex={catIndex} setCatIndex={setCatIndex} categories={categories} setUserInput={setUserInput} setCatResult={setCatResult}/>
            
            <main className="static flex w-full z-0">
                
                <SideBar subCatIndex={subCatIndex} setSubCatIndex={setSubCatIndex} categories={categories} itemCat={itemCat} searchResult={searchResult}/>
                
                <MainContainer>
                    <MainView searchResult={searchResult} subCatIndex={subCatIndex} itemCat={itemCat} setCatIndex={setCatIndex} setMarvelId={setMarvelId}
                              setItemCat={setItemCat} />
                    <LinksAndMore listOfAllItems={catResult} setPageOffset={setPageOffset} pageOffset={pageOffset}
                                  catName={categories[catIndex || 0].name}
                                  setMarvelId={setMarvelId} setItemCat={setItemCat}
                    />
                </MainContainer>
                
            </main>
            
            <Footer/>
        </div>
    )
}

export default App
