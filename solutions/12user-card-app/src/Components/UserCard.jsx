export default function UserCard(props) {
    return (
        <>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
            <hr />
        </>
    )
}