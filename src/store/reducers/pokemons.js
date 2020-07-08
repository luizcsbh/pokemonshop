function data(state=[],action){
    switch(action.type){
        case 'SHOW_POSTS':
            return action.data
        default:
            return state;
    }
}

export default data;