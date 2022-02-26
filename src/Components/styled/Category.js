import styled from "styled-components";


export const CategoryStyled = styled.div`
    height: 40px;
    width: 96%;
    background-color: #937878;
    margin-top: 60px;
    right:0;
    padding: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
        height: fit-content;
      }
`

export const CategoryLinked = styled.p`
    color: black;
`
export const CategoryLinkdiv = styled.div`
      display:flex;
      flex-direction: row;
      justify-content: space-evenly;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
      }
`