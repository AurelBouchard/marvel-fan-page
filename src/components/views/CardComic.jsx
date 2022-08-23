import React from 'react';

export default function CardComic({key, id, name, setMarvelId, setItemCat, setCatIndex}) {
    const cardCatValue = 1;
    
    return (
        <div key={key}
             className={`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear
                        `}
                onClick={() => {
                    setMarvelId(id);
                    setCatIndex(cardCatValue);
                    setItemCat(cardCatValue)
                }}
            >
            <div className={`flex border-b`}>
                <div className={`p-2 shrink-0`}>
                    <img src="" alt="" className={`bg-dark rounded w-12 h-12`}/>
                </div>
                <p className={`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`}>
                    {name}
                </p>
            </div>
            <div className={`flex items-center space-x-8 p-1`}>
                <p>un</p>
                <p>deux</p>
                <p>trois</p>
            </div>
        </div>
    )
}