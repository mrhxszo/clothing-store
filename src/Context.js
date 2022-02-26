import{ createContext, useState } from 'react';

export const CartContent =  createContext();


export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    return(
        <CartContent.Provider value={{ cart, setCart }}>{ children }</CartContent.Provider>
    );
}