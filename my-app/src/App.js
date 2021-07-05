import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUsers} from "./services/API";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/post-details/PostDetails";

function App() {
  const [postsState, setPosts] = useState([]);
  const [postDetails, setPost] = useState(null);

  useEffect(() =>{
      getUsers().then(({data}) => setPosts(data));
  }, []);

  function selectPost(id){
      getUser(id).then(({data})=> setPost(data));
  }

  return (
    <div>
         <Posts key={postsState.id} items={postsState} selectPost={selectPost}/>
        <hr/>
        {
            postDetails && <PostDetails key={postDetails.id} item={postDetails}/>
        }
    </div>
  );
}

export default App;
