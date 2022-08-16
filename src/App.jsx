import {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import View from "./components/View";
import MainContainer from "./components/MainContainer";
import Related from "./components/Related";
import Footer from "./components/Footer";
import {categories} from "./models/categories";
import axios from "axios";
import {api} from "./credentials";




function App() {
    const [catIndex, setCatIndex] = useState(0)         // in header
    const [subCatIndex, setSubCatIndex] = useState(null)   // in sidebar
    const [catResult, setCatResult] = useState(null)
    const [searchResult, setSearchResult] = useState(null)
    const [pageOffset, setPageOffset] = useState(0)
    const [marvelId, setMarvelId] = useState(null)
    const [itemCat, setItemCat] = useState(null)
    
    
    useEffect(() => {setPageOffset(0)}, [catIndex])
    
    /**
     * http request the API each time a new category is selected in the header
     * or pageOffset change
     */
    useEffect(()=>{
        // purge old results
        setCatResult(null)
        
        //console.log("ask api : ",`${api.url}${categories[catIndex].name}?apikey=${api.pubKey}&hash=${api.hash}&ts=${api.ts}&offset=${pageOffset}`)
        
        // renew results
        axios.get(`${api.url}${categories[catIndex].name}?apikey=${api.pubKey}&hash=${api.hash}&ts=${api.ts}&offset=${pageOffset}`)
            .then( allItems => {
                console.log("response : ",allItems)
                setCatResult(allItems)
            } )
    },[catIndex, pageOffset])
    
    
    
    useEffect(() => {
        if (marvelId) {
            console.log("specific call")
            axios.get(`${api.url}${categories[catIndex].name}/${marvelId}?apikey=${api.pubKey}&hash=${api.hash}&ts=${api.ts}`)
                .then( oneItem => {
                    console.log("response : ",oneItem)
                    setSearchResult(oneItem)
                } )
    
            // set view to overview
            setSubCatIndex(0)
        }
    },[marvelId])
    
    
    
    
    
    return (
        <div className="text-grey">
            <Header catIndex={catIndex} setCatIndex={setCatIndex} categories={categories}/>
            <main className="static flex w-full z-0">
                <SideBar subCatIndex={subCatIndex} setSubCatIndex={setSubCatIndex} categories={categories} itemCat={itemCat}/>
                <MainContainer>
                    <View searchResult={searchResult} subCatIndex={subCatIndex} itemCat={itemCat}/>
                    <Related listOfAllItems={catResult?.data?.data.results} setPageOffset={setPageOffset} pageOffset={pageOffset}
                             catName={categories[catIndex].name}
                             setMarvelId={setMarvelId} setItemCat={setItemCat}
                    />
                </MainContainer>
            </main>
            <Footer/>
        </div>
    )
}

export default App
