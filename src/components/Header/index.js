
import React,{useState} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../store/actions';
import {Main,Logo,Topbar,InputContainer,Cart,CartItemsContainer,CartItems,CartTitle,Finish} from './style';
import {BsBag,BsSearch} from "react-icons/bs";
import {Link} from 'react-router-dom';

function Header({modules,total,searchPokemon}) {
    const [url,setUrl] = useState('');

    function search(){
        searchPokemon(url)
    }

    function handleUrl(e){
        const txt = e.target.value
        setUrl(()=>txt);
    
    }

  return (
      <>
       <Topbar>
           <div className="max-container">
                    Hiring Coders
            </div>
        </Topbar>
        <Main>
            <div className="max-container">
                <Logo>
                    <Link to="/">
                    Pokémons<span>Shop</span>
                    </Link>
                </Logo>
                <InputContainer>
                    <input type="text" className='field-search' placeholder="Pesquisar..." value={url} onChange={handleUrl}/>
                    <button onClick={search} className="send-search" ><BsSearch /></button>
                </InputContainer>
                <Cart>
                    <BsBag />
                    <span>{modules.length}</span>
                    <CartItemsContainer className="cart-container">
                        <CartTitle>Carrinho</CartTitle>
                        <CartItems>
                            {modules.map((item,i)=>{
                                return (
                                <li key={i} className="cart-item">
                                    <span className="image">
                                       <img src={item.img} alt={item.name} />
                                    </span>
                                    <span className="text">
                                        <p>{item.name}</p>
                                        <div className='box-values'>
                                            <span className="qtd">Quantidade: {item.qtd}</span>
                                            <span className="price">Valor unitário: <p className="destaque">{item.formatedPrice}</p></span>
                                        </div>
                                    </span>
                                   
                                </li>
                                )
                            })}
                            
                        </CartItems>
                        <div className="subtotal">
                            <p>Subtotal:</p>
                            <span>{total.formatedPrice}</span>
                        </div>
                        <Finish>
                            <Link to="/checkout">Finalizar Compra</Link>
                        </Finish>
                    </CartItemsContainer>
                </Cart>
            </div>
        </Main>
    </>
  );
}


const mapStateToProps = (state) => {
    return {
        modules: state.cart,
        total:state.total
    }
}

const mapDispatchToProps = (dispatch)=>
    bindActionCreators(Actions,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Header);


