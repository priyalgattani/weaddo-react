function InsightArticle(props) {
    return (
        <div className="col-6 insight-article">
            <img
                src={props.img}
                alt="Article Image"
            />
            <span>{props.title} </span>
            <a className="insights-a" href="#">By {props.author}</a>
        </div>
    );
}

export default InsightArticle