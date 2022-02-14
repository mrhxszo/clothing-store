import styled from 'styled-components';

export const ShopContainer = styled.div`
    display: grid;
    margin: 60px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media only screen and (max-width: 480px) {
        grid-template-columns: 1fr;
      }
      @media only screen and (max-width: 760px) and (min-width: 480px) {
        grid-template-columns: 1fr 1fr;
      }
      @media only screen and (max-width: 1000px) and (min-width: 760px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
`