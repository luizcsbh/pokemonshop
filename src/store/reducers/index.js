import {combineReducers} from 'redux';
import pokemons from './pokemons';
import cart from './cart';
import total from './total';
import pagination from './pagination';

export default combineReducers({
    pokemons,
    cart,
    total,
    pagination
});
