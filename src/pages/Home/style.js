import styled from 'styled-components';

export const CardContainer = styled.main`
   .max-container{
        display:grid;
        grid-template-columns:1fr 1fr 1fr 1fr;
        grid-gap:20px;
   }
   @media (max-width:991px){
       .max-container{
         grid-template-columns:1fr 1fr 1fr;
       }
   }
   @media (max-width:767px){
       .max-container{
         grid-template-columns:1fr 1fr;
       }
   }
   @media (max-width:567px){
       .max-container{
         grid-template-columns:1fr;
       }
   }
`;