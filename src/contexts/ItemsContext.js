
import React from "react";
//Context
import { createContext, useState } from "react";
export const ItemsContext = createContext();

const itemsCart =[];


export const ItemsProvider = ({children}) =>{
    const [items, setItems] = useState(itemsCart);
   

    return (
        <ItemsContext.Provider value={{items, setItems}}>
            {children}
        </ItemsContext.Provider>
    )
}