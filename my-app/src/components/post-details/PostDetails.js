export default function PostDetails({item: {userId, id, title, body}}){

    return(
        <div>
            {userId} - {id} - {title} - {body}
        </div>
    );
}
