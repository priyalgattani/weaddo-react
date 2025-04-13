export default function PartnerLogo(props) {
    return (
        <div className="partner-logo col-lg-2 col-md-3">
            <img
                className={props.class}
                src={props.link}
                alt={props.name}
            />
        </div>
    )
}