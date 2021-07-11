import React, {Fragment} from "react";

export default function GetTodo({todos, clickDelete, clickComplete}){

    return(
        <div>
            {todos.map(todo =>(
                <Fragment key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
                    <div>Status {todo.completed.toString()}</div>
                    <button onClick={() => clickComplete(todo.id)}>Complete todo</button>
                    <button onClick={() => clickDelete(todo.id)}>Delete todo</button>
                    <hr/>
                </Fragment>
            ))}
        </div>
        )
}
