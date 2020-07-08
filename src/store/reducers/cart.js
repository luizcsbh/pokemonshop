function cart(state=[],action){
    switch(action.type){
        case 'ADD_ITEM':
          
            if(state.length){
                
                let newArr = []
                let indexEqualItem = null;
                
                for(let i=0;i<state.length;i++){
                    if(state[i].name === action.data.name){
                        indexEqualItem = i;
                        break;
                    }
                }
                
                if(indexEqualItem !== null){
                    newArr = [...state]
                    newArr[indexEqualItem].qtd = newArr[indexEqualItem].qtd + 1;
                }else{
                    newArr = [...state,action.data]
                }
                
                return newArr;
            }else{
                return [...state,action.data]
            }
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
}

export default cart