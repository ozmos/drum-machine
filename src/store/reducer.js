const initialState = {
    display: '',
    kit: 0
}
//todo: fix Unreachable code error
const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'UPDATE':
        return Object.assign({}, state, {display: action.display})
        break;
        case 'NEXT':
        return Object.assign({}, state, {kit: action.kit})
        default: 
        return state;
    }
    /*const newState = {...state};
    if (action.type === 'UPDATE') {
        newState.display = action.display;
    return newState;
    } else if (action.type === 'NEXT') {
        newState.kit++;
        return newState;
    } else {
        return state;
    }*/
};

export default reducer;
