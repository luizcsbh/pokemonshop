function toMoney(e){
    return e.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function total(state={total:0,totalFormated:'R$ 00,00'},action){
    switch(action.type){
        case 'CALC_TOTAL':
            let price = action.data.price
            let {total} = {...state}
            let newPrice = price+total;
            return {total:newPrice,formatedPrice:toMoney(newPrice)};
        case 'CLEAR_TOTAL':
            return {total:0,totalFormated:'R$ 00,00'};
        default:
            return state;
    }
}

export default total;