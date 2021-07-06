import {Route, Switch} from "react-router-dom";
import Comment from "../сomment/Comment";
import CommentDetails from "../comment-details/CommentDetails";

export default function Comments(props){
    const {items} = props;

    return(
        <div>
            {
                items.map(value => <Comment key={value.id} item={value}/>)
            }
            <Switch>
                {/*<Route path={'/comments/:id'} component={CommentDetails}/>*/}
                <Route path={'/comments/:id'} component={CommentDetails}/>
            </Switch>
        </div>
    );
}
