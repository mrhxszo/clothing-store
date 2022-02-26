import { CategoryLinkdiv, CategoryLinked, CategoryStyled } from './styled/Category';
import {useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

const Category = () => {

    let [categories, setCatagories] = useState([]);

    useEffect(()=>{
        fetchCategories();
    },[]);

    const fetchCategories = async () => {
        let catagoriesData = await fetch("https://fakestoreapi.com/products/categories");
        let catagories = await catagoriesData.json();
        setCatagories(catagories);
    }
    
    return(
        <CategoryStyled>
            <h3>Categories</h3>
            <CategoryLinkdiv style={{
                  display:'flex',
                  justifyContent: 'space-evenly',
                  width: '100%'
            }}>
                <Link to='/Shop/jewelery'><CategoryLinked>jewelery</CategoryLinked></Link>
                <Link to='/Shop/electronics'><CategoryLinked>electronics</CategoryLinked></Link>
                <Link to="/Shop/men's-clothing"><CategoryLinked>men's clothing</CategoryLinked></Link>
                <Link to="/Shop/women's-clothing"><CategoryLinked>women's clothing</CategoryLinked></Link>
            </CategoryLinkdiv>
            
        </CategoryStyled>
    );
}

export default Category;