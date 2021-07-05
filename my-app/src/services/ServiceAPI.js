import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

const getUsers =() => axiosInstance.get();
const getUser = (id) => axiosInstance.get('/' + id);
export {getUsers, getUser};

