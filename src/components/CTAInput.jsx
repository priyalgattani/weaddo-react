import React from "react";

export default function CTAInput(props) {
  return (
    <div className={`form-group ${props.width}`}>
      <input
        type="text"
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        onKeyPress={props.onKeyPress}
      />
      <span id="lname-error" className="error-message"></span>
    </div>
  );
}
