import axios from "axios";
import {api} from "../credentials";
import {categories} from "../models/categories";


export default function backstage(setter){  // expected setter : setAvailableItems
    let limit = 100;
    
    setter(categories.map((cat, index) => {
        let offset = 0;
        let full = true;
        let items = []; // {name:"name||title||fullName", id:"marvelId"}
    
        do {
            axios.get(`${api.url}${cat.name}${api.credentials}&offset=${offset}&limit=${limit}`)
                .then( response => {
                    console.log("response : ",response)
                    let bunchOfItems = response.data.data.results;
                    items += bunchOfItems.map(item => {
                        let name = item.name || item.title || item.fullName;
                        return {name:name, id:item.id}
                    });
                    if (bunchOfItems.length < limit) {full = false}
                } )
                .catch(err => console.log(err))
        }
            // tant que la liste est pleine length=100
        while (full);
    })
)
    
}


/*
* AVAILABLE ITEMS :
* [
*   [{name:"name||title||fullName", id:"marvelId"}] //[0] is for categories[0]
*   ...
* ]
* */