import {Link} from "react-router-dom";

export default function Post({item}){
    const {userId, id, title} = item;

    return(
        <div>
            {userId} - {id} - {title}
            {/*{userId} - {id} - {title} - <Link to={'/posts/' + id}>Details</Link>*/}
            {userId} - {id} - {title} - <Link to={
            {
                pathname: '/posts/' + id,
                state: item
            }
        }>Details</Link>
        </div>
    );
}
