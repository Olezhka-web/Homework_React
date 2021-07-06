import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getComment} from "../../services/ServiceAPI";

export default function CommentDetails(props){
    //const {match: {params: {id}}} = props;
    // const {id} = useParams();
    const {location: {state}} = props;

    const [comment, setComment] = useState({});

    // useEffect(() =>{
    //     getComment(id).then(({data}) => setComment(data));
    // }, [id]);

    useEffect(() =>{
        setComment({...state});
    }, [state]);

    return(
        <div>
            <hr/>
            {comment.postId} - {comment.id} - {comment.name} - {comment.email} - {comment.body}
        </div>
    );
}
