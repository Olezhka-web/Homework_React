import User from "../user/User";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

export default function Users({items}){

    const dispatch = useDispatch();

    const fetchUsers = async ()=>{
        const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
        dispatch({
            type: 'SET_USERS',
            payload: data
        });
    }

    useEffect(() =>{
        items.length === 0 && fetchUsers();
    }, []);

    return(
      <div>
          {
          items.map(value => <User key={value.id} item={value}/>)
          }
      </div>
    );
}
