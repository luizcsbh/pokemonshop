import styled from 'styled-components';

export const List = styled.li`
    display:flex;
    align-items:center;
    border-bottom:1px solid #ddd;
    justify-content:space-between;
    padding:10px 20px;
    box-sizing:border-box;
 
    img{
        height: 70px;
        object-fit: contain;
        background: #f5f5f59c;
    }

    @media (max-width:567px){
        flex-direction:column;

    }
`;
export const Name = styled.p`
    font-weight: 400;
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
