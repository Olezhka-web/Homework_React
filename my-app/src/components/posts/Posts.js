import Post from "../post/Post";
import {Route, Switch} from "react-router-dom";
import PostDetails from "../post-details/PostDetails";

export default function Posts(props){
    const {items} = props;

    return(
        <div>
            {
                items.map(value => <Post key={value.id} item={value}/>)
            }
            <Switch>
                {/*<Route path={'/posts/:id'} component={PostDetails}/>*/}
                <Route path={'/posts/:id'} component={PostDetails}/>
            </Switch>
        </div>
    );
}
