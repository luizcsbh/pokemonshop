function pagination(state={},action){
    switch(action.type){
        case 'SET_PAGINATION':
            return action.data
        default:
            return state;
    }
}

export default pagination;