export default function User({item: {id, name, username, email}}){
    return(
        <div>
            {id} - {name} - {username} - {email}
        </div>
    );
}
