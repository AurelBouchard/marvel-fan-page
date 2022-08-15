import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Details from "./components/Details";
import MainContainer from "./components/MainContainer";
import Related from "./components/Related";
import Footer from "./components/Footer";
import {categories} from "./models/categories";

function App() {
    const [catIndex, setCatIndex] = useState(0)
    const [searchResult, setSearchResult] = useState(null)
    
    
    return (
        <div className="text-grey">
            <Header catName={categories[catIndex].name}/>
            <main className="flex w-full">
                <SideBar catIndex={catIndex} setCatIndex={setCatIndex} categories={categories}/>
                <MainContainer>
                    <Details searchResult={searchResult}/>
                    <Related searchResult={searchResult} category={categories[catIndex]}/>
                </MainContainer>
            </main>
            <Footer/>
        </div>
    )
}

export default App
