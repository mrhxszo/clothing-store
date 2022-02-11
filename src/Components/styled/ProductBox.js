import styled from 'styled-components';


export const ProductBox = styled.div`
    display:flex;
    flex-direction: column;
    background-color: white;
    position: fixed;
    height: 90%;
    width: 50%;
    padding: 2%;
    margin: 5%;
    border-radius: 6%;
    box-shadow: -2px 5px 2px 1px grey;
    @media only screen and (max-width: 480px) {
        height: 70%;
        width: 90%;
      }
      @media only screen and (max-width: 760px) and (min-width: 480px) {
        height: 80%;
        width: 70%;
      }
      @media only screen and (max-width: 1000px) and (min-width: 760px) {
        height: 90%;
        width: 50%;
      }

`

export const SmallProductBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2%;
    margin: 2%;
    border-radius: 10%;
    box-shadow: -2px 5px 2px 1px grey;
    &:hover {
        transform: scale(1.07);
      }
`