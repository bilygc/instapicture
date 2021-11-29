import axios from 'axios';

const url = window.location.hostname === 'localhost' ? 'http://localhost:5000' : 'https://instapic-true.herokuapp.com';
const API = axios.create({baseURL:url})

API.interceptors.request.use((req) =>{
    if (localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts',newPost)
export const updatePost = (id, post) => API.patch(`/posts/${id}`, post)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/likePost/${id}`)

export const signIn = (FormData) => API.post('/user/signin', FormData);
export const signUp = (FormData) => API.post('/user/signup', FormData);
