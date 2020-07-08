import styled from 'styled-components';

export const Main = styled.div`
    width:100%;
    margin:40px 0;
    .max-container{
        display:flex;
        align-items:center;
        justify-content:space-between;
        height:100px;
    }
    button{
       opacity:0;
       pointer-events:none;
    }
    button[active]{
        display:block;
        background:var(--theme-color-1);
        border:0;
        color:white;
        height:40px;
        padding:0px 20px;
        text-transform:uppercase;
        font-size:15px;
        opacity:1;
        pointer-events:all;
    }
    svg{
        display:inline;
        vertical-align:top;
        margin:0px 4px;
    }
    @media (max-width:567px){
        .max-container{
            flex-wrap:wrap;
            justify-content:center;
        }
    }
`;