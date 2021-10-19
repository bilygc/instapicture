import axios from 'axios';

const url = window.location.hostname === 'localhost' ? 'http://localhost:5000/posts' : 'https://instapic-true.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost) => axios.post(url,newPost)
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/likePost/${id}`)