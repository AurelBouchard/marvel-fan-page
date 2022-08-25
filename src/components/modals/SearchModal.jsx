import React from 'react';
import Card from "../views/Card";

export default function SearchModal({catName, onClick, matches, setMarvelId, errorMessage}) {
    
    return (
        <div className="z-50 bg-dark/60 backdrop-filter backdrop-blur-md h-full w-full fixed top-18
                flex flex-col justify-start items-center overflow-hidden"
        onClick={onClick}>
            <p className="pt-24 text-5xl text-grey-alt font-light mb-12">
                Search for any Marvel {catName}
            </p>
            {matches && matches[0] ?
                <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 overflow-scroll h-1/2`}>
                    {matches.map((item, index)=> {
                        return (
                            <Card key={index} name={item.name} id={item.id} setMarvelId={setMarvelId}/>
                        )
                    })}
                </div>
                : null}
            {errorMessage ?
                <div>
                    <p className={`text-red-600`}>{errorMessage.main}</p>
                    {errorMessage.details.toString()}
                </div> : null }
        </div>
    )
}