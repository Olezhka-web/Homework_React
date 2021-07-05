export default function Post({items: {userId, id, title, body}}) {
    return(
        <div>
            {userId}-{id}-{title}-{body}
        </div>
    )
}
