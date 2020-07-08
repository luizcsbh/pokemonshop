import styled from 'styled-components';

export const Main = styled.div`
    border: 1px var(--theme-color-1) solid;
    border-radius: 15px 15px 0px 0px;
    max-width:320px;
    text-align:center;
    display:block;
    margin:0 auto;
    width:100%;
    img{
        width:100%;
        height:250px;
        object-fit:contain;
    }
`;
export const Name = styled.p`
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 5px;
`;

export const Price = styled.p`
    font-weight: 900;
    font-size: 20px;
    margin-top:10px;
    margin-bottom:10px;
    color:var(--theme-color-1);
`;


export const Info = styled.div`
    font-weight: 700;
    font-size: 15px;
    width:100%;
    max-width:200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform:uppercase;
    margin:0 auto;
    padding:5px 20px;
    box-sizing:border-box;
    background:#eee;
    margin-top:5px;
    color:#202020;
    border-radius:20px;

    span{
        font-weight: 300;
    }
`;

export const Buy = styled.button`
   height:40px;
   line-height:40px;
   padding:0px;
   width:100%;
   color:white;
   font-weight:700;
   background:var(--theme-color-1);
   border:0;
   text-transform:uppercase;
   font-size:15px;
`;