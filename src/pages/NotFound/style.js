import styled from 'styled-components';

export const Main = styled.main`
   .max-container{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        height:100vh;
        max-height:400px;
   }
   p{
       font-size:25px;
       text-transform:uppercase;
       color: var(--theme-color-1);
       font-weight:800;
   }
   a{
       color:#202020;
       text-transform:uppercase;
       margin-top:10px;
       text-decoration:underline;
   }
`;