import React from 'react';

// contexts
import useAppParam from "../hooks/useAppParam";
import useItemContext from "../hooks/useItemContext";

// data
import {initialItem} from "../App";


export default function Footer() {
    
    // USE CONTEXTS
    const [appParam, setAppParam] = useAppParam("Footer")
    const [item, setItem] = useItemContext("Footer")
    
    
    return (
        <div className={`bg-transparent p-16 md:px-60 md:mt-32`}>
            <div className={`mb-24 flex flex-col md:flex-row leading-8 text-grey-dark`}>
                <div className={`pr-0 md:pr-16`}>
                    <p className={`font-bold`}>Marvel Fan Page</p>
                    <div>
                        Side project that fetch the official Marvel API. All endpoints are used. <br/>
                        Design is freely inspired by Openbase.com web site. <br/>
                        <div className={`flex items-center`}>
                        Open source code is available here
                        <a href="https://github.com/AurelBouchard/marvel-fan-page" className={`hover:text-teal`}
                           title="Open GitHub repo" rel="noreferrer noopener" target="_blank">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 17.25V9.75C19.25 8.64543 18.3546 7.75 17.25 7.75H4.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25Z"/>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11"/>
                            </svg>
                        </a></div>
                    </div>
                </div>
                <div className={`mt-12 md:mt-0`}>
                    <div className={`flex items-center`}>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 19.2502H9.25C9.80229 19.2502 10.25 18.8025 10.25 18.2502V5.75C10.25 5.19772 9.80229 4.75 9.25 4.75H5.75C5.19772 4.75 4.75 5.19772 4.75 5.75V18.2502C4.75 18.8025 5.19772 19.2502 5.75 19.2502Z"/>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.75 10.2502H18.25C18.8023 10.2502 19.25 9.80253 19.25 9.25025V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14.75C14.1977 4.75 13.75 5.19772 13.75 5.75V9.25025C13.75 9.80253 14.1977 10.2502 14.75 10.2502Z"/>
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.75 19.2502H18.25C18.8023 19.2502 19.25 18.8025 19.25 18.2502V14.75C19.25 14.1977 18.8023 13.75 18.25 13.75H14.75C14.1977 13.75 13.75 14.1977 13.75 14.75V18.2502C13.75 18.8025 14.1977 19.2502 14.75 19.2502Z"/>
                        </svg>
                        <p className={`font-bold`}>Categories</p>
                    </div>
                    <ul className={`pl-4`}>
                        {appParam.categories.map((cat, index) => {
                            return (
                                <li className={`cursor-pointer py-2 hover:text-teal`} key={index}
                                    onClick={()=>{
                                        if (index !== item.catIndex) {
                                            setItem({defaultItem: initialItem, ...{catIndex: index}})
                                        } }}
                                >
                                    <div className={`flex items-center`}>
                                        {cat.logo}
                                        <div className={`pl-2 capitalize`}>
                                            {cat.name}
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}