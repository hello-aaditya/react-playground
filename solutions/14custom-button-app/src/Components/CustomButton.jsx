export default function CustomButton(props) {
    return (
        <>
            <button
                style= {{ backgroundColor: props.myColor }}
                >
                    {props.myLabel}</button>
        </>
    )
}