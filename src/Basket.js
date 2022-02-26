import { useState, useContext, useEffect } from 'react';
import { CartContent } from './Context';
import { Product } from './Components/Product';
import { ProductContainerStyled } from './Components/styled/ShopContainer';


const Basket = function () {

    const {cart, setCart} = useContext(CartContent);

    let cartProducts = cart.map((element) => {
        return (<Product info = {element} fromCart={true}></Product>)
    }); 
    
    return (
        <ProductContainerStyled>
        {cartProducts ? cartProducts : null}
        

        </ProductContainerStyled>

        
     );
}

export default Basket;