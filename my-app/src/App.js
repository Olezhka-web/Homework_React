import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    const {count, users, posts, comments} = useSelector(({count, users, posts, comments}) => ({count, users, posts, comments}));
    // const count = useSelector(({count}) => count);
    // const users = useSelector(({users}) => users);
    // const posts = useSelector(({posts}) => posts);
    // const comments = useSelector(({comments}) => comments);

    const dispatch = useDispatch();

    const [value, setValue] = useState(1);

  return (
    <div>
        <div>
        <h1>Count: {count}</h1>
        <input onChange={(event) => setValue(event.target.value)} type="number"/>
        <button onClick={() => dispatch({type: 'INCREMENT', payload: +value})}>Increment</button>
        <button onClick={() => dispatch({type: 'DECREMENT', payload: +value})}>Decrement</button>
        <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        </div>
        <Router>
            <div>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/users'>All Users</Link></div>
                <div><Link to='/posts'>All Posts</Link></div>
                <div><Link to='/comments'>All Comments</Link></div>

                <Switch>
                    <Route exact path='/' render={() => <div>Home Page</div>}/>
                    <Route path='/users' render={() => (<Users key={users.id} items={users}/>)}/>
                    <Route path='/posts' render={() => (<Posts key={posts.id} items={posts}/>)}/>
                    <Route path='/comments' render={() => (<Comments key={comments.id} items={comments}/>)}/>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
