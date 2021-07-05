import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import './App.css';
import Users from "./components/users/Users";
import {useEffect, useState} from "react";
import {getComments, getPosts, getUsers} from "./services/ServiceAPI";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    const [usersState, setUsers] = useState([]);
    const [postsState, setPosts] = useState([]);
    const [commentsState, setComments] = useState([]);

    useEffect(() =>{
        getUsers().then(({data}) => setUsers(data));
        getPosts().then(({data}) => setPosts(data));
        getComments().then(({data}) => setComments(data));
    }, []);

    // useEffect(() =>{
    //     getPosts().then(({data}) => setPosts(data));
    // }, []);
    //
    // useEffect(() =>{
    //     getComments().then(({data}) => setComments(data));
    // }, []);

  return (
    <Router>
        <div>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/users'>All Users</Link></div>
            <div><Link to='/posts'>All Posts</Link></div>
            <div><Link to='/comments'>All Comments</Link></div>

            <Switch>
                <Route exact path='/' render={() => <div>Home Page</div>}/>
                <Route path='/users' render={() => (<Users key={usersState.id} items={usersState}/>)}/>
                <Route path='/posts' render={() => (<Posts key={postsState.id} items={postsState}/>)}/>
                <Route path='/comments' render={() => (<Comments key={commentsState.id} items={commentsState}/>)}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
