import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../../services/ServiceAPI";

export default function UserDetails(props){
    //const {match: {params: {id}}} = props;
    // const {id} = useParams();
    const {location: {state}} = props;

    const [user, setUser] = useState({});

    // useEffect(() =>{
    //     getUser(id).then(({data}) => setUser(data));
    // }, [id]);

    useEffect(() =>{
        setUser({...state});
    }, [state]);

    return(
        <div>
            <hr/>
            {user.id} - {user.name} - {user.username} - {user.email}
        </div>
    );
}
