import GetTodo from "../getTodo/GetTodo";
import React from "react";

export default function Todos({todos, isLoading, clickDelete, clickComplete, onSubmit}){
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>
            {todos.length > 0 && <GetTodo todos={todos} key={todos.id} clickDelete={clickDelete} clickComplete={clickComplete} onSubmit={onSubmit}/>}
        </div>
    )
}
