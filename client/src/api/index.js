import axios from 'axios';

const url = 'http://localhost:8080/posts'

export const fetchPosts = () => axios.get(url)
export const makePost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, postData) => axios.patch(`${url}/${id}`, postData)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likepost`)