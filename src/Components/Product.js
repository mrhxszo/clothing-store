import react, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ProductBox, SmallProductBox } from './styled/ProductBox';
import styled from 'styled-components';
import { gsap } from 'gsap';

const Wrapper = styled.div`
    position: fixed;
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
    
    const node = useRef(null);
    let [displayModal, changeDisplay] = useState(false);

    useLayoutEffect(()=>{
        if(displayModal === true){
            gsap.timeline().from(node.current, {
                y: "+=800",
                ease: "Powerout3"
            }).duration(0.9);
        }
        
    },[displayModal]);

    const closeModal = async () => {
        gsap.timeline().to(node.current, {
            y: "+=800",
            ease: "Powerout3"
        }).duration(0.9);
        setTimeout(()=>changeDisplay(false), 1000);
        
    }
    
    const wrapper = (
        <Wrapper onClick={closeModal}> 
            <ProductBox ref={node} onClick={e => e.stopPropagation()}>
                <h2>{props.info.title}</h2>
                <img src={props.info.image} style={{height: '50%', width: '100%', objectFit: 'contain'}}></img>
                <p style={{fontSize:'12px'}}>{props.info.description}</p>
                <p>Price: {props.info.price}</p>
            </ProductBox>
        </Wrapper>
    );

    return (
        <>
            <SmallProductBox onClick={() => changeDisplay(true)}> 
                <img src={props.info.image} style={{height: '80%', width: '100%', objectFit: 'contain'}}></img>
                <p>{props.info.title}</p>
            </SmallProductBox>

            {displayModal? wrapper: null}
                
        </>
        
    );
}