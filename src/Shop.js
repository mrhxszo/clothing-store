import react, { useState, useEffect, useRef } from 'react';
import { ShopContainer } from './Components/styled/ShopContainer';
import Category from './Components/Category';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";


export const Shop = (props) => {

    let [header, setHeader] = useState('');
        
    return (  
        <ShopContainer>
            <Category/>
            {header ? <h2>{header}</h2> : null}
            <Outlet context={[header, setHeader]}/>
        </ShopContainer>
    );
}