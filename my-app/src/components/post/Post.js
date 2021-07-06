export default function Post({item: {userId, id, title}}){

    return(
        <div>
            {userId} - {id} - {title}
        </div>
    );
}
