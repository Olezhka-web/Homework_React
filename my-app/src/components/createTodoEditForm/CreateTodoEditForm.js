import React, {useEffect, useState} from "react";

export default function CreateTodoEditForm({ onSubmit, todo}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        });
        return () => {
            clearTimeout(timer);
        }
    }, []);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(isLoading) return;

        try{
            setIsLoading(true);
            await onSubmit(title, description, completed, todo);
            setTitle('');
            setDescription('');
            setCompleted('');
        }
        catch (e) {
            console.log(e.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={({target: {value}}) => setTitle(value)} placeholder={'New Title'}/>
            <br/>
            <input type="text" onChange={({target: {value}}) => setDescription(value)} placeholder={'New Description'}/>
            <br/>
            <input type="text" onChange={({target: {value}}) => setCompleted(value)} placeholder={'New Completed'}/>
            <br/>
            <button type="submit" disabled={isLoading}>To Make Changes todo</button>
        </form>
    )
}
