import Post from "../post/Post";
import {useEffect, useState} from "react";

export default function Posts(){
const [postsList, setPostsList] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPostsList(value));
    }, []);

return(
    <div>
        {
            postsList.map(value => <Post items={value} key={value.id}/>)
        }
    </div>
);
}
