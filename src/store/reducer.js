const initialState = {
    display: '808 Kit'
}

const reducer = (state = initialState, action) => {
    const newState = {...state};
    if (action.type === 'UPDATE') {
        newState.display = action.display;
    return newState;
    } else {
        return state;
    }
};

export default reducer;
