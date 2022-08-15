import React from 'react';

export default function ShowAll({catName, list}) {
    const listOfAll = [
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8",
        "item9",
        "item10",
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8",
        "item9",
        "item10",
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8",
        "item9",
        "item10",
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8",
        "item9",
        "item10",
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8",
        "item9",
        "item10",
    ]
    
    return (
        <div className="bg-dark rounded-xl p-4">
            <p className={`uppercase font-bold pb-4`}>all {catName}</p>
            {listOfAll.map((elt, index)=> {
                return (
                    <div key={index} className={`uppercase font-light text-sm bg-grey-slate rounded mb-px pl-2 py-0.5
                    hover:bg-teal hover:text-dark-darkest hover:font-bold
                    cursor-pointer`}>
                        {elt}
                    </div>
                )
            })}
        </div>
    )
}