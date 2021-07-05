export default function Post({item: {userId, id, title, body}}){

    return(
        <div>
            {userId} - {id} - {title} - {body}
        </div>
    );
}
