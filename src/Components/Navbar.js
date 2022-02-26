import {useEffect, useState, useContext} from 'react';
import { CartContent } from '../Context';
import {StyledNavbar, StyledButton, StyledNavbarMobile} from './styled/Navbar';
import Navlinks from './Navlinks';
import { GrBasket } from 'react-icons/gr';
import { Link } from 'react-router-dom';



const Navbar = ()=>{

    let [screenWidth, changeScreenWidth] = useState(window.innerWidth);
    let [toggle, changeToggle] = useState(true);
    const { cart, setCart } = useContext(CartContent);

    useEffect(
        ()=>{
            if(screenWidth <= 500){
                changeToggle(false);
                
            }
            else{
                changeToggle(true);
            }

            const changeWidth = () => {
                changeScreenWidth(window.innerWidth);
                if(window.innerWidth <= 500){
                    changeToggle(false);
                }
                else{
                    changeToggle(true);
                }
  
            };

            window.addEventListener('resize', changeWidth);
            
            return () =>{
                window.removeEventListener('resize', changeWidth);
            }
        },[]);

        const navToggle = ()=>{
                changeToggle(!toggle);
            }

        const nav = () => {
            if(screenWidth <= 500 && toggle){
                return(
                    <StyledNavbarMobile>
                        <div>Logo</div>
                        <Navlinks click={(x) => changeToggle(x)} style={{width:'20%'}}/>
                        <div style={{display:'flex',justifyContent: 'space-between',width: '20%', alignItems: 'baseline'}}>
                            <StyledButton onClick={navToggle}></StyledButton>
                            <Link to='/Basket'>
                                <div style={{display:'flex', alignItems:'center'}}><GrBasket/><p>{cart.length}</p></div>
                                
                            </Link>
                        </div>
                        
                    </StyledNavbarMobile>
                    
                );
            }
            else{
                return(        
            <StyledNavbar>
                <div>Logo</div>
                {toggle && <Navlinks/>}
                <div style={{display:'flex',justifyContent: 'space-between',width: '20%', alignItems: 'center'}}>
                            <StyledButton onClick={navToggle}></StyledButton>
                            <Link to='/Basket'>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <GrBasket/>({cart.length})
                                </div>
                                
                            </Link>
                        </div>    
            </StyledNavbar>
                );
            }
        }


        
    return (
        nav()
    );
} 
export default Navbar;