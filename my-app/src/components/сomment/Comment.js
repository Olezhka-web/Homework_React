export default function Comment({item: {postId, id, name, email, body}}){
    return(
        <div>
            {postId} - {id} - {name} - {email} - {body}
        </div>
    );
}
