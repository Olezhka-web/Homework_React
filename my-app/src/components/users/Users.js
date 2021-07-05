import User from "../user/User";

export default function Users(props){
    const {items} = props;
    return(
        <div>
            {
                items.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    );
}
