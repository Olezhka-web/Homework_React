import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    addTodos,
    deleteTodos,
    pushTodo,
    setLoadingFalse,
    setLoadingTrue, updateTodos,
    updateTodosStatus
} from "./redux/actionCreators";
import CreateTodoForm from "./components/createTodoForm/CreateTodoForm";
import Todos from "./components/todos/Todos";

function App() {
    const { todos, todosLoading } = useSelector(store => store.todosReducer);
    const dispatch = useDispatch();

    const fetchTodos = async () =>{
        try {
            dispatch(setLoadingTrue());
            const resp = await fetch('http://localhost:8888/get-todos');
            const data = await resp.json();

            dispatch(addTodos(data));
        }
        catch (e){
            console.log(e.message)
        }
        finally {
            dispatch(setLoadingFalse());
        }
    }

    useEffect(() =>{
        fetchTodos();
    }, []);

    const onTodoCreate = async (title, description) =>{
        if(!title || !description) return;

        const resp = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await resp.json();
        dispatch(pushTodo(data));
    }

    const onTodoDelete = async (id) =>{
        const resp = await fetch(`http://localhost:8888/delete-todo/${id}`, {
            method: 'DELETE',
            message: 'Todo Deleted'
        });
        const data = await resp.json();
        dispatch(deleteTodos(data));
    }

    const onTodoUpdateStatus = async (id) =>{
        const resp = await fetch(`http://localhost:8888/update-todo/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({completed: true}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await resp.json();
        dispatch(updateTodosStatus(data));
    }

    const onTodoUpdate = async (title, description, completed, todo) =>{
        if(!title){
            title = todo.title;
        }
        if(!description){
            description = todo.description;
        }
        if(!completed || (completed !== 'true' && completed !== 'false')){
            completed = todo.completed.toString();
        }
        const resp = await fetch(`http://localhost:8888/update-todo/${todo.id}`, {
            method: 'PATCH',
            body: JSON.stringify(
                {
                    title,
                    description,
                    completed: (completed === 'true')
                }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await resp.json();
        dispatch(updateTodos(data));
    }

    return (
        <div>
            <CreateTodoForm onSubmit={onTodoCreate} />
            <Todos todos={todos} isLoading={todosLoading} clickDelete={onTodoDelete} clickComplete={onTodoUpdateStatus} onSubmit={onTodoUpdate}/>
        </div>
  );
}

export default App;
