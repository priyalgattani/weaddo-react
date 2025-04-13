export default function CTAMessage(props) {
    return(<div className="form-group">
        <textarea
          className="form-control"
          id="n-message"
          placeholder="Message"
          cols={props.columns}
          rows={props.rows}
        ></textarea>
      </div>)
}