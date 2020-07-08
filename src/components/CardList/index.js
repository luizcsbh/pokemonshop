
import React from 'react';
import {List,Name,Price} from './style';

function Card(props) {
    const {image,name,price} = props
  return (
        <List>
            <img src={image} alt={name}/>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </List>
    )
}

export default Card;


