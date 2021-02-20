import React from "react";

export default function Button(props) {
  return (
    <button
      className="btn btn-info border-dark m-2"
      type="button"
      label={props.label}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
