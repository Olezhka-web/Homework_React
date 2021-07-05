import Comment from "../сomment/Comment";

export default function Comments(props){
    const {items} = props;
    return(
        <div>
            {
                items.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    );
}
