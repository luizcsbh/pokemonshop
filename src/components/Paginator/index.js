
import React from 'react';
import {Main} from './style';
import { BsFillSkipBackwardFill,BsFillSkipForwardFill } from "react-icons/bs";

function Paginator(props) {
  return (
        <Main>
            <div className="max-container">
                <button active={props.previousLink} onClick={props.previous}><BsFillSkipBackwardFill/> Anterior</button>
                <button active={props.nextLink} onClick={props.next}>Avançar  <BsFillSkipForwardFill/></button>
            </div>
        </Main>
    )
}

export default Paginator;


