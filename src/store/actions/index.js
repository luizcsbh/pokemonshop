export function getPosts(data){
    return { 
        type:'GET_POSTS',
        data
    }
}

export function addToCart(data){
    return { 
        type:'ADD_TO_CART',
        data
    }
   
}

export function clearCart(data){
    return { 
        type:'CLEAR_CART',
        data
    }
}

export function clearTotal(data){
    return { 
        type:'CLEAR_TOTAL',
        data
    }
}

export function searchPokemon(data){
    return { 
        type:'SEARCH_POKEMON',
        data
    }
}