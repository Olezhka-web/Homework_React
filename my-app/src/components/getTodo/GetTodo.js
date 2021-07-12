import React, {Fragment, useState} from "react";
import CreateTodoEditForm from "../createTodoEditForm/CreateTodoEditForm";

export default function GetTodo({todos, clickDelete, clickComplete, onSubmit}){
    const [objectTodo, setObjectTodo] = useState(null);

    return(
        <div>
            {todos.map(todo =>(
                JSON.stringify(objectTodo) === JSON.stringify(todo) ?
                    <Fragment key={todo.id}>
                        <div style={{display: 'flex'}}>
                            <div style={{marginRight: '15px'}}>
                                {
                                    todo.completed ? <div style={{textDecoration: 'line-through', height: '25px'}}>{todo.title}</div> : <div style={{height: '25px'}}>{todo.title}</div>
                                }
                                <div style={{height: '25px'}}>{todo.description}</div>
                                <div style={{height: '25px'}}>Created At: {new Date(todo.createdAt).toDateString()}</div>
                                <div style={{height: '25px'}}>Status {todo.completed.toString()}</div>
                                <button onClick={() => clickComplete(todo.id)}>Complete todo</button>
                                <button onClick={() => clickDelete(todo.id)}>Delete todo</button>
                                <button onClick={() => setObjectTodo(todo)}>Edit FORM</button>
                                <hr/>
                            </div>
                            <div>
                                <CreateTodoEditForm todo={todo} onSubmit={onSubmit} key={todo.id}/>
                            </div>
                        </div>
                    </Fragment>
                    :
                <Fragment key={todo.id}>
                    {
                        todo.completed ? <div style={{textDecoration: 'line-through'}}>{todo.title}</div> : <div>{todo.title}</div>
                    }
                    <div>{todo.description}</div>
                    <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
                    <div>Status {todo.completed.toString()}</div>
                    <button onClick={() => clickComplete(todo.id)}>Complete todo</button>
                    <button onClick={() => clickDelete(todo.id)}>Delete todo</button>
                    <button onClick={() => setObjectTodo(todo)}>Edit FORM</button>
                    <hr/>
                </Fragment>
            ))}
        </div>
        )
}
