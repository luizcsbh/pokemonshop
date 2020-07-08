
import React from 'react';
import {Main,Name,Info,Price,Buy} from './style';

function Card(props) {
    const {img,name,weight,height,formatedPrice,func} = props;
    return (
        <Main>
            <img src={img} alt={name}/>
            <Name>{name}</Name>
            <Info>Peso:<span>{weight}kg</span></Info>
            <Info>Altura:<span>{height}m</span></Info>
            <Price>{formatedPrice}</Price>
            <Buy onClick={func}>Adicionar ao carrinho</Buy>
        </Main>
    )
}

export default Card;


