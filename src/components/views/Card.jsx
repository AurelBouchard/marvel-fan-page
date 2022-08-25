import React from 'react';

export default function Card({key, id, name, setMarvelId, setItemCat, setCatIndex}) {
    const cardCatValue = 1; // find index in categories
    
    const cardStyle = [
        {   // characters
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`bg-dark rounded w-12 h-12`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex items-center space-x-8 p-1`},
        {   // comics
            main:`uppercase font-light text-sm bg-grey-slate transition-colors
                        rounded
                        hover:bg-grey-darker cursor-pointer
                        animate-appear`,
            img:`bg-dark rounded w-12 h-12`,
            title:`m-4 normal-case font-bold text-base text-ellipsis overflow-hidden h-12`,
            bottom:`flex items-center space-x-8 p-1`},
        `text-red-600`, // creators
        `text-red-600`, // events
        `text-red-600`, // series
        `text-red-600`, // stories
    ]
    
    
    
    return (
        <div key={key}
             className={cardStyle[cardCatValue].main}
                onClick={() => {
                    setMarvelId(id);
                    setCatIndex(cardCatValue);
                    setItemCat(cardCatValue)
                }}
            >
            <div className={`flex border-b`}>
                <div className={`p-2 shrink-0`}>
                    <img src="" alt="" className={cardStyle[cardCatValue].img}/>
                </div>
                <p className={cardStyle[cardCatValue].title}>
                    {name}
                </p>
            </div>
            <div className={cardStyle[cardCatValue].bottom}>
                <p>{id}</p>
                <p>deux</p>
                <p>trois</p>
            </div>
        </div>
    )
}