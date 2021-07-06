export default function Comment({item: {postId, id, name}}){

    return(
        <div>
            {postId} - {id} - {name}
        </div>
    );
}
