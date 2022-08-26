import React, {useState} from 'react';
import SearchModal from "./modals/SearchModal";
import MainCatSelector from "./MainCatSelector";
import axios from "axios";
import {api} from "../credentials";
import {categories} from "../models/categories";


export default function Header({catIndex, setCatIndex, categories, dico, setMarvelId }) {
    const [searching, setSearching] = useState(false)
    const [showLens, setShowLens] = useState(true)
    const [matches, setMatches] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    
    const catName = categories[catIndex || 0].name;
    
    console.log("header")
    
    function closeSearchModal() {
        if (searching) {setSearching(false)}
    }
    
    /**
     * search for input into dico then update matches state
     * don't try fetch because of too much queries
     *
     * @param name {string}
     */
    function handleInputChange(name) {
        //console.log("input change", name)
        setShowLens(!name)
        
        // cleaning
        if (!searching) { setSearching(true) }
        if (errorMessage) { setErrorMessage(null) }
        
        if (name) {
            setMatches(dico[catIndex].filter(item => item.name.toLowerCase().includes(name.toLowerCase())))
        } else {
            setMatches(null)
        }
    }
    
    /**
     * search for input into dico then show possible matches in the modal
     * if nothing to show : maybe dico is not complete so
     * fetch API and return response on modal
     *
     * @param name {string}
     */
    function handleSubmit(name) {
        console.log("input submit", name)
        
        
        let itemInDico = dico[catIndex].filter(item => item.name.toLowerCase() === name.toLowerCase())
        
        if (itemInDico[0]) {
            setMarvelId(itemInDico[0].id)
            setSearching(false)
        }
        else {
            let nameOrTitle = catIndex === 1 ? "title" : "name"; // only comics endpoint uses titleStartsWith
            
            axios.get(`${api.url}${categories[catIndex].name}${api.credentials}&${nameOrTitle}StartsWith=${name}`)
                .then( response => {
                    //console.log("searchResult => ",response.data?.data?.results[0])
                    if (response.data?.data?.results[0]?.id) {
                        setMarvelId(response.data?.data?.results[0].id)
                        setSearching(false)
                    } else {
                        throw {response:"or are you miserably confusing with DC comics ?"}
                    }
                })
                .then()
                .catch(function(err) {
                    console.log(err)
                    if (err.response) {
                        // response but not found
                        setErrorMessage({main:"What you're looking for must have vanished because of the Snap ...", details:err.response})
                        
                    } else if (err.request) {
                        // no response
                        setErrorMessage({main:"Your request must have gotten lost in multiverse ...", details:err})
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        setErrorMessage({main:"Something fu***d up !", details:err})
                    }
                })
        }
        
        
    }
    
    
    
    
    return (
        <>
            <div className="sticky top-0 flex space-x-8 items-center px-8 bg-dark hrr-18 w-screen shadow-md shadow-black z-50">
                <div className={`shrink-0 ${searching ? "text-marvel" : "text-teal"}`}>
                    <svg width="130" height="52" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="currentColor" width="100%" height="100%"/>
                        <path fill="#FEFEFE" d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"/>
                        {/*
                        <path fill="#EC1D24" d="M0 0h30v52H0z"></path>
                        <path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path>
                        */}
                    </svg>
                </div>
                <div className={`w-36 shrink-0`}>
                    <h1>Marvel Fan Page</h1>
                </div>

                <div id="searchBar" className={`flex flex-1 items-center py-3 z-90 ${searching ? "-translate-x-44" : "translate-0"} duration-300`}>

                    <MainCatSelector
                        categories={categories}
                        catIndex={catIndex} setCatIndex={setCatIndex}
                        expandable={!searching}
                         />
                    
                    <input id="searchField" name="searchField" onClick={() => {setSearching(true)} }
                           className={`bg-black border-1.5 border-grey-darker rounded-tr-lg rounded-br-lg h-12  transition-all
                           w-80 origin-left basis-auto ${searching ? "grow placeholder:text-grey-darker" : "placeholder:text-grey-dark"}
                           px-2 caret-teal ml-14
                           outline-none`}
                           placeholder={`Search for any Marvel ${catName}`}
                           onChange={(e) => {
                               e.preventDefault()
                               handleInputChange(e.target.value)
                           }}
                           onKeyPress={(e) => {
                               if (e.key === 'Enter' ) {handleSubmit(e.target.value)}
                           }}
                    />
                    {!showLens ? <div className="w-[19px]"/> :
                        <div id="lens" className="relative -left-8 text-grey-dark">
                            <svg width="18.748" height="18.749" fill="currentColor">
                                <path d="M12.52 2.145a7.337 7.337 0 10-1 11.207 1.545 1.545 0 00.419.778l4.16 4.165a1.552 1.552 0 002.194-2.195l-4.165-4.167a1.55 1.55 0 00-.777-.418 7.344 7.344 0 00-.831-9.37zm-1.315 9.061a5.477 5.477 0 110-7.745 5.483 5.483 0 010 7.745z"/>
                            </svg>
                        </div>
                    }
                    
                    <div id="closeBtn" className={`${searching ? "transition opacity-100 delay-150" : "transition-none opacity-0"} text-teal-light w-8 h-8`}
                         onClick={closeSearchModal}>
                        <svg viewBox="0 0 100 100">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="10">
                                <line x1="10" y1="10" x2="90" y2="90" />
                                <line x1="10" y1="90" x2="90" y2="10" />
                            </g>
                        </svg>
                        
                    </div>
                </div>

            </div>
            { !searching ? null : <SearchModal catName={catName} catIndex={catIndex} onClick={closeSearchModal} matches={matches} setMarvelId={setMarvelId} errorMessage={errorMessage}/> }
        </>
        
    )
}