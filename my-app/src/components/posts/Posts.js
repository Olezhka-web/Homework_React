import {useEffect} from "react";
import {useDispatch} from "react-redux";
import Post from "../post/Post";

export default function Posts({items}){

    const dispatch = useDispatch();

    const fetchPosts = async ()=>{
        const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        dispatch({
            type: 'SET_POSTS',
            payload: data
        });
    }

    useEffect(() =>{
        items.length === 0 && fetchPosts();
    }, []);

    return(
        <div>
            {
                items.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    );
}
