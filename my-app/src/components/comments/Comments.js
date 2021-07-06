import {useEffect} from "react";
import {useDispatch} from "react-redux";
import Comment from "../comment/Comment";

export default function Comments({items}){

    const dispatch = useDispatch();

    const fetchComments = async ()=>{
        const data = await (await fetch('https://jsonplaceholder.typicode.com/comments')).json();
        dispatch({
            type: 'SET_COMMENTS',
            payload: data
        });
    }

    useEffect(() =>{
        items.length === 0 && fetchComments();
    }, []);

    return(
        <div>
            {
                items.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
}
