import {useEffect, useState} from 'react';
import {StyledNavbar, StyledButton, StyledNavbarMobile} from './styled/Navbar';
import Navlinks from './Navlinks';




const Navbar = ()=>{

    let [screenWidth, changeScreenWidth] = useState();
    let [toggle, changeToggle] = useState(true);

    useEffect(
        ()=>{

            const changeWidth = () => {
                changeScreenWidth(window.innerWidth);
                if(window.innerWidth > 500){
                    changeToggle(true);
                }
                if(window.innerWidth < 500){
                    changeToggle(false);
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
            if(screenWidth < 500 && toggle){
                return(
                    <StyledNavbarMobile>
                        <div>Logo</div>
                        <Navlinks click={(x) => changeToggle(x)}/>
                        <StyledButton onClick={navToggle}>BTN</StyledButton>
                    </StyledNavbarMobile>
                );
            }
            else{
                return(        
            <StyledNavbar>
                <div>Logo</div>
                {toggle && <Navlinks/>}
                <StyledButton onClick={navToggle}>BTN</StyledButton>    
            </StyledNavbar>
                );
            }
        }


        
    return (
        nav()
    );
} 
export default Navbar;