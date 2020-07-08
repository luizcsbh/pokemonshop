import {takeLatest,call,put} from 'redux-saga/effects';
import axios from 'axios';


function generatePrice(){
    let price = Math.ceil(Math.random() * 1000)
    price = parseInt(price)
    let formatedPrice = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return [price,formatedPrice]
}
  
function* callPosts(url){
    yield call(getPokemons,url);
}
function* callSearchPokemon(search){
  yield call(searchPokemon,search)
}

function* callAddToCart(item){
  yield put({type:'ADD_ITEM',data:item.data})
  yield put({type:'CALC_TOTAL',data:item.data})
}

function* getPokemons(url){
    const link = url.data ? url.data : 'https://pokeapi.co/api/v2/pokemon';
    const response = yield axios.get(link);
    const pagination = {
        next:response.data.next,
        previous:response.data.previous
    }
    const urls = yield response.data.results.reduce((acumulator,current)  => {
       return acumulator.concat(()=>axios.get(current.url));
    }, [])

    const allInfo = yield Promise.all(urls.map(item=>item()))
    
    const pokemons = yield allInfo.reduce((acumulator,current)  => {
        const [price,formatedPrice] = generatePrice();
        return acumulator.concat({...current.data,price,formatedPrice});
    }, [])

    yield put({type:'SHOW_POSTS',data:pokemons});
    yield put({type:'SET_PAGINATION',data:pagination});
}

function* searchPokemon(search){
  const url = ` https://pokeapi.co/api/v2/pokemon/${search.data}/`;
  const response =  yield axios.get(url).catch((e)=>console.log(e));

  if(!response){
    alert('Pokemon não encontrado')
  }else{
    yield put({type:'SHOW_POSTS',data:[response.data]});
  }
}


export default function* root() { 
  yield takeLatest('GET_POSTS',callPosts);
  yield takeLatest('ADD_TO_CART',callAddToCart);
  yield takeLatest('SEARCH_POKEMON',callSearchPokemon);
}