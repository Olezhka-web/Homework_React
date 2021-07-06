import {Link} from "react-router-dom";

export default function Comment({item}){
    const {postId, id, name} = item;

    return(
        <div>
            {postId} - {id} - {name}
            {/*{postId} - {id} - {name} - <Link to={'/comments/' + id}>Details</Link>*/}
            {postId} - {id} - {name} - <Link to={
            {
                pathname: '/comments/' + id,
                state: item
            }
        }>Details</Link>
        </div>
    );
}
