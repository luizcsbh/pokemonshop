import styled from 'styled-components';

export const Main = styled.header`
    box-shadow: 0 1px 8px rgba(0,0,0,.13);
    padding: 10px 0;
    position: sticky;
    top: 0;
    backdrop-filter: blur(5px);
    background: #ffffffd4;
    z-index: 50;

    .max-container{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .max-container .seach-input{
        flex:1;
    }

    @media (max-width:567px){
         .max-container{
            flex-wrap:wrap;
         }
    }
`;

export const Logo = styled.div`
    font-family: Yellowtail,cursive;
    
    a{
        color: var(--theme-color-1);
        font-size: 35px;
        line-height:35px;
    }
    span{
        display:block;
        margin-left:20px;
    }

    @media (max-width:567px){
        span{
            display:inline;
            margin:0;
        }
    }
`;

export const Topbar =  styled.div`
    background:var(--theme-color-1);
    height:30px;
    width:100%;
    line-height:30px;
    text-align:right;
    color:#f5f5f5;
    font-size:12px;
    text-transform:uppercase;
`;

export const InputContainer =  styled.div`
    position:relative;
    width:100%;
    max-width:600px;
    height:40px;
    margin:0px 30px;
    overflow:hidden;
    border-radius:25px;
    border:1px solid var(--theme-color-1);

    input{
        border:0;
        display:block;
        margin:0 auto;
        width:100%;
        box-sizing:border-box;
        height:100%;
        padding:0px 20px;
        font-style:italic;
        color:#202020;
        font-weight:300;
        font-size:15px;
   }

   button{
        position:absolute;
        top:0;
        right:0;
        height:100%;
        width:50px;
        background:var(--theme-color-1);
        border:0;
        text-align:center;
        color:white;
        padding:5px 10px 0px 5px;
        box-sizing:border-box;
   }
   @media (max-width:567px){
       width:100%;
       order:3;
       border-radius:unset;
       margin:0px;
       margin-top:10px;

        input{
            font-size:12px;
        }
   }
`;

export const Cart =  styled.div`
    position:relative;
    &>*{
        font-size:30px;
    }
    &>span{
        position: absolute;
        background: var(--theme-color-1);
        color: white;
        font-size: 13px;
        display: block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border-radius: 100%;
        bottom: 0;
        right: 0;
    }
    &:hover .cart-container{
        opacity:1;
        visibility:visible;
    }
`;

export const CartItemsContainer =  styled.div`
    position:absolute;
    right: 0;
    top: 100%;
    background: white;
    width: 320px;
    box-sizing: border-box;
    box-shadow: 0px 0px 4px rgba(0,0,0,.4);
    visibility:hidden;
    opacity:0;
    transition:0.5s;
    .subtotal{
        padding:0px 20px;
        font-size:15px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-top:20px;
    }
    .subtotal span{
        font-weight:700;
        color:var(--theme-color-1);
    }
    @media (max-width:567px){
        width:290px;
    }
`;

export const CartTitle =  styled.h6`
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    height: 30px;
    line-height: 30px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: #f5f5f5;
    background: var(--theme-color-1);
    padding: 0px 10px;
    margin-bottom:10px;
`;

export const CartItems =  styled.ul`
    min-height: 50px;
    padding: 0px 10px;
    max-height: 320px;
    overflow-x: auto;
    .cart-item {
        display:flex;
        justify-content:space-between;
        padding:5px 10px; 
        border-bottom:1px solid #ddd;
    }
    .text{
        flex:1
    }
    .box-values{
        font-size:13px;
    }
    .box-values span{
        display:block;
    }
    .text>p{
        font-weight: 600;
        font-size: 15px;
        text-transform: uppercase;
        margin-bottom:15px;
    }
    img{
        margin-right:10px;
        box-sizing:border-box;
    }
    .destaque{
        color:var(--theme-color-1);
        font-weight:600;
        display:inline;
    }

    &::-webkit-scrollbar {
    width: 5px;
    padding-right: 10px;
    scrollbar-width: 5px;
}

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
        margin-right: 37px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--theme-color-1);
        border-radius: 0px;
    }
`;



export const Finish =  styled.button`
    height: 40px;
    line-height: 40px;
    padding: 0px;
    width: 90%;
    font-weight: 300;
    background: var(--theme-color-1);
    border: 0;
    text-transform: uppercase;
    font-size: 15px;
    border-radius:25px;
    margin:0 auto;
    display: block;
    margin-bottom:10px;
    margin-top:15px;
    a{
        color: white;
    }
`;
