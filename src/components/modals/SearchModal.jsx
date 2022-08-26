import React from 'react';
import Card from "../views/Card";

export default function SearchModal({catName, catIndex, onClick, matches, setMarvelId, errorMessage}) {
    
    return (
        <div className="z-50 bg-dark/60 backdrop-filter backdrop-blur-md h-full w-full fixed top-18
                flex flex-col justify-start items-center overflow-hidden"
        onClick={onClick}>
            <p className="pt-16 text-5xl text-grey-alt font-light mb-12">
                Search for any Marvel {catName}
            </p>
            {matches && matches[0] ?
                <div className={`mx-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 overflow-scroll max-h-1/2`}>
                    {matches.map((item, index)=> {
                        return (
                            <Card name={item.name}
                                  resource={item.resource}
                                  setMarvelId={setMarvelId}
                                  subCatIndex={catIndex} subCatName={catName}
                                  latency={300+index*500}
                            />
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