import {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Details from "./components/Details";
import MainContainer from "./components/MainContainer";
import Related from "./components/Related";
import Footer from "./components/Footer";
import {categories} from "./models/categories";
import axios from "axios";
import {api} from "../private/credentials";




function App() {
    const [catIndex, setCatIndex] = useState(0)         // in header
    const [subCatIndex, setSubCatIndex] = useState(0)   // in sidebar
    const [catResult, setCatResult] = useState(null)
    const [searchResult, setSearchResult] = useState(null)
    const [pageOffset, setPageOffset] = useState(0)
    const [marvelId, setMarvelId] = useState(null)
    
    /**
     * http request the API each time a new category is selected in the header
     * or pageOffset change
     */
    useEffect(()=>{
        console.log("ask api : ",`${api.url}${categories[catIndex].name}?apikey=${api.pubKey}&hash=${api.hash}&ts=${api.ts}&offset=${pageOffset}`)
        
        axios.get(`${api.url}${categories[catIndex].name}?apikey=${api.pubKey}&hash=${api.hash}&ts=${api.ts}&offset=${pageOffset}`)
            .then( allItems => {
                console.log("response : ",allItems)
                setCatResult(allItems)
            } )
    },[catIndex, pageOffset])
    
    
    return (
        <div className="text-grey">
            <Header catIndex={catIndex} setCatIndex={setCatIndex} categories={categories}/>
            <main className="flex w-full">
                <SideBar subCatIndex={subCatIndex} setSubCatIndex={setSubCatIndex} categories={categories}/>
                <MainContainer>
                    <Details searchResult={searchResult}/>
                    <Related listOfAllItems={catResult?.data?.data.results} setPageOffset={setPageOffset} pageOffset={pageOffset}
                             searchResult={searchResult} category={categories[catIndex]}
                             setMarvelId={setMarvelId}
                    />
                </MainContainer>
            </main>
            <Footer/>
        </div>
    )
}

export default App
