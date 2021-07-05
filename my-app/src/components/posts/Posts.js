import Post from "../post/Post";

export default function Posts(props){
    const {items} = props;

    return(
        <div>
            {
                items.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    );
}
