import {
    ADD_TODOS,
    DELETE_TODOS,
    LOADING_FALSE,
    LOADING_TRUE,
    PUSH_TODO, UPDATE_TODOS,
    UPDATE_TODOS_STATUS
} from "../actionTypes";

export const setLoadingFalse = () => ({type: LOADING_FALSE});
export const setLoadingTrue = () => ({type: LOADING_TRUE});
export const addTodos = (payload) => ({type: ADD_TODOS, payload});
export const pushTodo = (payload) => ({type: PUSH_TODO, payload});
export const deleteTodos = (payload) => ({type: DELETE_TODOS, payload});
export const updateTodosStatus = (payload) => ({type: UPDATE_TODOS_STATUS, payload});
export const updateTodos = (payload) => ({type: UPDATE_TODOS, payload});
