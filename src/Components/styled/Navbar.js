import styled from "styled-components";
import { MdMenu } from "react-icons/md";

export const StyledNavbar = styled.nav`

    list-style-type: none;
    position: fixed;
    z-index:1;
    top:0;
    left:0;
    background: rgb(121,87,87,0.8);
    height: 7%;
    width: 100%;
    display: flex;
    justify-content: space-around;
`
export const StyledNavbarMobile = styled(StyledNavbar)`
    
    @media only screen and (max-width: 500px) {
        flex-direction:row;
        height: 50%;
    }
`


export const StyledNavLink = styled.a`

    margin: 2%;
    padding: 2%;
    color: white;
    text-decoration: none;
    font-family: monospace;
    cursor: pointer;


    &:hover{
        color: blue;
    }

    @media only screen and (max-width: 500px) {
        font-size:25px;
    }
`
export const StyledButton = styled(MdMenu)`

    display: none;
    height: 20px;

    @media only screen and (max-width: 500px) {
        display:block;
        
      }

`
