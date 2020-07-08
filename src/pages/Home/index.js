
import React,{useEffect} from 'react';
import ShelfCard from '../../components/ShelfCard';
import banner from '../../static/bannerpoke.jpg';
import {CardContainer} from './style';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../store/actions';
import Paginator from '../../components/Paginator';

function Home({data,getPosts,addToCart,page}) {
    const fetch = getPosts;
    useEffect(function(){
        fetch()
    },[fetch]);
    return (
            <>
            <div className="max-container main-banner">
                <img src={banner} alt="Banner principal"/>
            </div>
            
            <Paginator
                previous={()=>getPosts(page.previous)}  
                next={()=>getPosts(page.next)}
                previousLink={page.previous}
                nextLink={page.next}
             />
            <CardContainer>

                <div className="max-container">
                    {data.map((item,i)=>
                        <ShelfCard 
                            key={i} 
                            img={item.sprites.front_default} 
                            formatedPrice={item.formatedPrice}
                            weight={item.weight}
                            height={item.height}
                            name={item.name}
                            func={()=>addToCart({
                                    price:item.price,
                                    formatedPrice:item.formatedPrice,
                                    name:item.name,
                                    img:item.sprites.front_default,
                                    qtd:1
                                })}
                        />
                    )}
        
                </div>
            </CardContainer>
            <Paginator
                previous={()=>getPosts(page.previous)}  
                next={()=>getPosts(page.next)}
                previousLink={page.previous}
                nextLink={page.next}
             />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.pokemons,
        page: state.pagination
    }
}

const mapDispatchToProps = (dispatch)=>
    bindActionCreators(Actions,dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Home);



