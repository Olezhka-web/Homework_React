import {Link} from "react-router-dom";

export default function User({item}){
    const {id, name, username, email} = item;
    return(
        <div>
            {/*{id} - {name} - {username} - {email} - <Link to={'/users/' + id}>Details</Link>*/}
            {id} - {name} - {username} - {email} - <Link to={
                {
                    pathname: '/users/' + id,
                    state: item
                }
            }>Details</Link>
        </div>
    );
}
