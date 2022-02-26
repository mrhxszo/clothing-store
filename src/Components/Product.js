import react, { useState, useEffect, useRef, useLayoutEffect, useContext } from 'react';
import { ProductBox, SmallProductBox } from './styled/ProductBox';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { GrClose } from 'react-icons/gr';
import { CartContent } from '../Context';

const Wrapper = styled.div`
    position: fixed;
    z-index:2;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0 ,0, 0.5);
    display:flex;
    align-items: center;
    justify-content: center;
`

export const Product = (props) => {

    const { cart, setCart } = useContext(CartContent);
    
    const node = useRef(null);
    let [displayModal, changeDisplay] = useState(false);

    useLayoutEffect(()=>{
        if(displayModal === true){
            gsap.timeline().from(node.current, {
                y: "+=800",
                ease: "Powerout3"
            }).duration(0.5);
        }
        
    },[displayModal]);

    const closeModal = async () => {
        gsap.timeline().to(node.current, {
            y: "+=800",
            ease: "Powerout3"
        }).duration(0.5);
        setTimeout(()=>changeDisplay(false), 250);
        
    }

    const removeFromCart = () => {
        let newCart = cart.filter( (element) => {
            return element.id !== props.info.id
        }
        );
        setCart(newCart); 
    }
    
    const wrapper = (
        
        <Wrapper onClick={closeModal}> 
        {props.info ?
            <ProductBox ref={node} onClick={e => e.stopPropagation()}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h3>{props.info.title}</h3>
                    <GrClose style={{fontSize:'25px'}} onClick={closeModal}/>
                </div>
                <img src={props.info.image} style={{height: '50%', width: '100%', objectFit: 'contain'}}></img>
                <p style={{fontSize:'12px'}}>{props.info.description}</p>
                <p>Price: {props.info.price}</p>
                <p>Category: {props.info.category}</p>
                <div onClick={e => e.stopPropagation()}>
                    <button onClick={ () => setCart([ ...cart, props.info]) }>Add to Cart</button>
                    {props.fromCart ? <button onClick={ removeFromCart}>Remove from Cart</button> : null}
                </div>
                
            </ProductBox> : null}
        </Wrapper>
    );

    return (
        <>
        {props.info ? 
        <SmallProductBox onClick={() => changeDisplay(true)}> 
                <img src={props.info.image} style={{height: '80%', width: '100%', objectFit: 'contain'}}></img>
                <p>{props.info.title}</p>
                <div onClick={e => e.stopPropagation()}>
                    <button onClick={ () => setCart([ ...cart, props.info]) }>Add to Cart</button>
                    {props.fromCart ? <button onClick={ removeFromCart}>Remove from Cart</button> : null}
                </div>
            </SmallProductBox>: null }
            {displayModal? wrapper: null} 

                
        </>
        
    );
}