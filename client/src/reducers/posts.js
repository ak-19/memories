const reducer = (data = {}, action) => {
    switch (action.type) {
        case 'CREATE':
            return { ...data, ...action.payload }
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_SEARCH':
            return { ...data, ...action.payload }
        case 'UPDATE':
        case 'LIKE':
            return { ...data, posts: data.posts.map(post => action.payload._id === post._id ? action.payload : post) };
        case 'DELETE':
            return { ...data, posts: data.posts.filter(post => action.payload !== post._id) };
        default:
            return { ...data }
    }
}

export default reducer;