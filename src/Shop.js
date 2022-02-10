import react, { useState, useEffect, useRef } from 'react';
import { Product } from './Components/Product';
import { ShopContainer } from './Components/styled/ShopContainer';


export const Shop = (props) => {
    
    const [productList, changeProductList] = useState([]);

    useEffect(()=>{
        fetchProduct();
    },[]);

    const fetchProduct = async () => {
        let productsData = await fetch("https://fakestoreapi.com/products");
        let products = await productsData.json();
        changeProductList(products);
    }


    let generateProducts = () =>{
        let products = [];
        productList.forEach(element => {
            products.push(<Product info={element} key={element.id? element.id:'00'} product={element}/>)
            
        });
        return products;
    }
    let products = generateProducts();
        
    return (  
        <ShopContainer>
            {products}
        </ShopContainer>
    );
}