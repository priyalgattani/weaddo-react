export default function GreenButton(props) {
    return (
        <button
            type={props.type}
            className={`btn btn-green btn-sm ${props.className}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}