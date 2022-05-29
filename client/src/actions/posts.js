import * as api from '../api';

export const getPost = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
};


export const createPost = (newPost) => async (dispatch) => {
    try {
        const { data } = await api.makePost(newPost);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
};


export const updatePost = (id, postData) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, postData);
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error.message);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: 'LIKE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

