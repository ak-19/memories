const reducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return { ...state }
        case 'FETCH_ALL':
            return action.payload;
        default:
            return { ...state }
    }
}

export default reducer;