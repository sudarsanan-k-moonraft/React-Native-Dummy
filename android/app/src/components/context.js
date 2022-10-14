import { createContext, useState } from 'react';
import React from 'react';
export const CartContext=React.createContext();

export const Context =({children})=>{
    const [cart,setCart]=useState([]);
    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}
