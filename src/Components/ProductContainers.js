import react, { useState, useEffect, useRef } from 'react';
import { Product } from './Product';
import { ProductContainerStyled } from './styled/ShopContainer';
import { useOutletContext } from 'react-router-dom';

const useFetchItems = (category) => {
    const [productList, changeProductList] = useState([]);

    useEffect(()=>{
        fetchProduct();
    },[]);

    const fetchProduct = async () => {
        let productsData;
        if (category !== 'newest'){
            
            productsData = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        }
        else{
            productsData = await fetch(`https://fakestoreapi.com/products`);
        }
        
        let products = await productsData.json();
        changeProductList(products);
    }

    return [productList, changeProductList];

}

export const Newest = () =>{
    let [productList, changeProductList] = useFetchItems('newest');
    const[ header, setHeader ] = useOutletContext();

    useEffect(()=>{
        setHeader('Newest Arrival');
    }, [])
    let generateProducts = () =>{
        let products = [];
        productList.forEach(element => {
            products.push(<Product info={element} key={element.id? element.id:'00'} product={element}/>)
            
        });
    return products;
}

    let products = generateProducts();

    return(
        <ProductContainerStyled>
            {products}
        </ProductContainerStyled>
            
            
    );
}

export const Jewelery = () => {

    let [productList, changeProductList] = useFetchItems('jewelery');
    const[ header, setHeader ] = useOutletContext();

    useEffect(()=>{
        setHeader('Jewelery');
    }, [])
    let generateProducts = () =>{
        let products = [];
        productList.forEach(element => {
            products.push(<Product info={element} key={element.id? element.id:'00'} product={element}/>)
            
        });
    return products;
}

    let products = generateProducts();

    return(
        <ProductContainerStyled>
            {products}
        </ProductContainerStyled>
            
            
    );
}

export const Electronics = (props) => {

    let [productList, changeProductList] = useFetchItems('electronics');
    const[ header, setHeader ] = useOutletContext();

    useEffect(()=>{
        setHeader('Electronics');
    }, [])
    let generateProducts = () =>{
        let products = [];
        productList.forEach(element => {
            products.push(<Product info={element} key={element.id? element.id:'00'} product={element}/>)
            
        });
    return products;
}

    let products = generateProducts();

    return(
        <ProductContainerStyled>
            {products}
        </ProductContainerStyled>
            
            
    );
}

export const MensClothing = (props) => {

    let [productList, changeProductList] = useFetchItems("men's clothing");
    const[ header, setHeader ] = useOutletContext();

    useEffect(()=>{
        setHeader("Men's Clothing");
    }, [])
    let generateProducts = () =>{
        let products = [];
        productList.forEach(element => {
            products.push(<Product info={element} key={element.id? element.id:'00'} product={element}/>)
            
        });
    return products;
}

    let products = generateProducts();

    return(
        <ProductContainerStyled>
            {products}
        </ProductContainerStyled>
            
            
    );
}

export const WomensClothing = () => {

    let [productList, changeProductList] = useFetchItems("women's clothing");
    const[ header, setHeader ] = useOutletContext();

    useEffect(()=>{
        setHeader("Women's Clothing");
    }, [])
    let generateProducts = () =>{
        let products = [];
        productList.forEach(element => {
            products.push(<Product info={element} key={element.id? element.id:'00'} product={element}/>)
            
        });
    return products;
}

    let products = generateProducts();

    return(
        <ProductContainerStyled>
            {products}
        </ProductContainerStyled>
            
            
    );
}
