import { StyledNavLink } from './styled/Navbar';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-evenly;

    @media only screen and (max-width: 500px) {
        flex-direction:column;
        height: 100%
      }
`


const Navlinks = (props) => {

    const click = () =>{
        props.click(false)
    }
    return(
            <StyledUl>
                    <Link to='/'>
                        <li onClick={click}><StyledNavLink>Home</StyledNavLink></li>
                    </Link>
                    <Link to='/About'>
                        <li onClick={click}><StyledNavLink>About</StyledNavLink></li>
                    </Link>
                    <Link to='/Shop'>
                        <li onClick={click}><StyledNavLink>Shop</StyledNavLink></li>
                    </Link>
                    <Link to='/Contact'>
                        <li onClick={click}><StyledNavLink>Contact</StyledNavLink></li>
                    </Link>
                    
            </StyledUl>      
    );
}

export default Navlinks;