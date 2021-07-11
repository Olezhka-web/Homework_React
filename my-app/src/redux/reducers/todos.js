import {ADD_TODOS, DELETE_TODOS, LOADING_FALSE, LOADING_TRUE, PUSH_TODO, UPDATE_TODOS_STATUS} from "../actionTypes";

const initialState = {
    todos: [],
    todosLoading: false
};

export const todosReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_TODOS: {
            return {...state, todos: action.payload};
        }
        case LOADING_TRUE: {
            return {...state, todosLoading: true};
        }
        case LOADING_FALSE: {
            return {...state, todosLoading: false};
        }
        case PUSH_TODO: {
            return {...state, todos: [...state.todos, action.payload]};
        }
        case DELETE_TODOS: {
            return {...state, todos: state.todos.filter(el => el.id !== action.payload.id)};
        }
        case UPDATE_TODOS_STATUS: {
            return {...state, todos: [...state.todos.filter(el => el.id !== action.payload.id), action.payload]};
        }
        default:{
            return state;
        }
    }
}
