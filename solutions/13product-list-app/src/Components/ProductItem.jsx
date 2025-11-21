export default function ProductItem(props) {
    return (
        <>
            <h4>{props.name}</h4>
            <p>ID: {props.id}</p>
            <p>Price: ₹{props.price}</p>
            <hr />
        </>
    )
}