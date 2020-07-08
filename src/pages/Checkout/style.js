import styled, {keyframes} from 'styled-components';

export const Main = styled.main`
   margin:50px auto;
   .max-container{
        display:grid;
        grid-template-columns: 2fr 1fr;
        grid-gap:30px;
        justify-content:center;
   }
   @media (max-width:767px){
      .max-container{
         grid-template-columns: 1fr;
      }
   }
`;

export const Itens = styled.ul`
   box-shadow:0px 0px 3px rgba(0,0,0,.3);
   .title{
      height:40px;
      line-height:40px;
      background:var(--theme-color-1);
      color:#f5f5f5;
      padding:0px 20px;
      font-weight:500;
   }
`;

export const Total = styled.div`
   position:sticky;
   top:100px;
   margin-left:auto;
   margin-left: auto;
   background: #f5f5f5;
   padding: 20px;
   text-align: center;
   transition:0.5s;
   border-radius:15px;

   .title{
      height:40px;
      line-height:40px;
      background:var(--theme-color-1);
      color:#f5f5f5;
      padding:0px 20px;
      font-weight:500;
   }
   .info{
      display:flex;
      justify-content:space-between;
      margin:5px 0;
      font-size:15px;
   }
   span{
      color:#202020;
      font-weight:700;
   }
   .title{
      font-family: Yellowtail,cursive;
      background:unset;
      font-size: 35px;
      line-height: 35px;
      color:var(--theme-color-1);
      margin-bottom:15px;
   }
   button{
      margin-top: 20px;
      height: 40px;
      background: var(--theme-color-1);
      color: white;
      border: 0;
      width: 100%;
   }
`;

const myCorazion = keyframes`
   0% {
      transform:scale(1.0)
   }

   50% {
      transform:scale(1.1)
   }

   100% {
      transform:scale(1.0)
   }
`;

export const Modal = styled.ul`
   visibility: ${props=>props.visibility === 0 ? 'hidden' : 'visible'};
   opacity: ${props=>props.visibility === 0 ? '0' : '1'};
   transition:0.5s;
   box-shadow:0px 0px 3px rgba(0,0,0,.3);
   position:fixed;
   background:rgba(0,0,0,.4);
   top:0;
   left:0;
   height:100%;
   width:100%;
   display:flex;
   align-items:center;
   justify-content:center;
   z-index:100;

   .container-modal{
      background: #f5f5f5;
      padding: 20px;
      border-radius: 20px;
      text-align: center;
      margin: 0px 10px;
      max-width: 400px;
   }
   header {
      font-weight: 700;
      color: var(--theme-color-1);
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
   }
   section {
      margin: 20px auto;
   }

   svg {
      display: block;
      margin: 0 auto;
      font-size: 150px;
      animation: ${myCorazion} 2s linear infinite;
   }
   a {
      color: #fff;
      background: var(--theme-color-1);
      width: 200px;
      display: block;
      margin: 0 auto;
      height: 40px;
      line-height: 40px;
      text-transform: uppercase;
      font-size: 14px;
      border-radius: 10px;
   }

`;

