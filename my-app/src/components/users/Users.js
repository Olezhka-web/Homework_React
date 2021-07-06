import User from "../user/User";
import {Switch, Route} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";

export default function Users(props){
    const {items} = props;
    return(
        <div>
            {
                items.map(value => <User key={value.id} item={value}/>)
            }
            <Switch>
                {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
                <Route path={'/users/:id'} component={UserDetails}/>
            </Switch>
        </div>
    );
}
