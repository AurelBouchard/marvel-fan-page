import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Official from "./components/Official";
import AppContent from "./components/AppContent";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import {categories} from "./models/categories";

function App() {
    const [catIndex, setCatIndex] = useState(0)
    
    
    return (
        <div className="App relative text-grey">
            <Header catName={categories[catIndex].name}/>
            <main className="flex fixed top-18 w-full h-full">
                <SideBar catIndex={catIndex} setCatIndex={setCatIndex} categories={categories}/>
                <MainContainer>
                    <Official catName={categories[catIndex].name}/>
                    <AppContent />
                </MainContainer>
            </main>
            <Footer/>
        </div>
    )
}

export default App
