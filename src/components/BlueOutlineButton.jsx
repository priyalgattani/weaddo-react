export default function BlueOutlineButton(props) {
    return (
        <button
            className={`btn btn-outline-blue ${props.class}`}
            type="button"
            name="button"
        >
            {props.text}
        </button>
    )
}