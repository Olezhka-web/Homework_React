import Post from "../post/Post";

export default function Posts(props){
    const {items, selectPost} = props;
    return(
      <div>
          {
              items.map(value => <Post key={value.id} items={value} selectPost={selectPost}/>)
          }
      </div>
    );
}
