
import React from 'react';
import {Main} from './style';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
        <>
        <Main>
            <div className="max-container">
                <p>A página solicitada não foi encontrada</p>
                <Link to="/">Voltar</Link>
            </div>
        </Main>
    </>
  );
}

export default NotFound;
