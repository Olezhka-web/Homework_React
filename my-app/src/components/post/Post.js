export default function Post({items: {id, title}, selectPost}){

    return(
        <div>
            {id} - {title}

            <button onClick={() =>{
                selectPost(id);
            }}>Click Me</button>
        </div>
    );
}
