export default function FooterInput(props) {
    return (
        <p>
            <input
                id={`f- ${props.name}`}
                placeholder={props.placeholder}
                name={props.name}
                value={formValues.fname}
                onChange={handleInputChange}
                className={!validStatus.fname ? 'invalid' : ''}
            />
            <button type="button" id="nextBtn" onClick={() => nextPrev(1)}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </p>
    )
}