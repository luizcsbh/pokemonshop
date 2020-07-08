import React, { useState } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../store/actions';
import CardList from '../../components/CardList';
import { Main,Itens,Total,Modal } from './style.js';
import { FcLike  } from "react-icons/fc";
import {Link} from 'react-router-dom';

function Chekout({data,total,clearCart,clearTotal}) {
  const [modalVisibility,setVisibility] = useState(0);
  function finishBuy(){
    clearCart();
    clearTotal();
    setVisibility(()=>{
        return 1;
    });
  }
  return (
      <Main>
          <Modal visibility={modalVisibility}>
              <div className="container-modal">
                <header>Pedido Finalizado</header>
                <section>
                      Obrigado por comprar na PokeShop!
                      <FcLike />
                </section>
                <Link to="/">Ir para o início</Link>
              </div>
          </Modal>
          <div className="max-container">
              <Itens className="total-container">
                  <h1 className="title">Meu Carrinho</h1>

                  {data.map((item,i)=>
                    <CardList key={i} name={item.name} image={item.img} price={item.formatedPrice}/>
                  )}
              </Itens>
                
              <div>
                <Total>
                      <h2 className="title">PokeShop</h2>
                      <div className="info">Quantidade: <span>{data.length}</span></div>
                      <div className="info">Total: <span>{total.formatedPrice}</span> </div>
                      <button onClick={finishBuy}>Finalizar Comprar</button>
                </Total>
              </div>
          </div>
      </Main>
  );
}

const mapStateToProps = (state) => {
  return {
      data: state.cart,
      total: state.total
  }
}

const mapDispatchToProps = (dispatch)=>
  bindActionCreators(Actions,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Chekout);



