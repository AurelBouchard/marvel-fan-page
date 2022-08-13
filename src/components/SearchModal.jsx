import React from 'react';

export default function SearchModal({catName, onClick}) {
    
    return (
        <div className="z-50 bg-dark bg-opacity-30 backdrop-filter backdrop-blur-md h-full w-full fixed top-18
                flex flex-col justify-start items-center"
        onClick={onClick}>
            <p className="pt-24 text-5xl text-grey-alt font-light">
                Search for any Marvel {catName}
            </p>
        </div>
    )
}