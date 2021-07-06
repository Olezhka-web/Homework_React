import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getPost} from "../../services/ServiceAPI";

export default function PostDetails(props){
    //const {match: {params: {id}}} = props;
    // const {id} = useParams();
    const {location: {state}} = props;

    const [post, setPost] = useState({});

    // useEffect(() =>{
    //     getPost(id).then(({data}) => setPost(data));
    // }, [id]);

    useEffect(() =>{
        setPost({...state});
    }, [state]);

    return(
        <div>
            <hr/>
            {post.userId} - {post.id} - {post.title} - {post.body}
        </div>
    );
}
