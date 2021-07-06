import axios from "axios";

const axiosInstanceUsers = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const axiosInstancePosts = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

const axiosInstanceComments = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
});

const getUsers = () => axiosInstanceUsers.get();
const getPosts = () => axiosInstancePosts.get();
const getComments = () => axiosInstanceComments.get();
const getUser = (id) => axiosInstanceUsers.get('/' + id);
const getPost = (id) => axiosInstancePosts.get('/' + id);
const getComment = (id) => axiosInstanceComments.get('/' + id);
export {getUsers, getPosts, getComments, getUser, getPost, getComment};
