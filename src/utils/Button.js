import React from "react";

export default function Button(props) {
  return (
    <button type="button" label={props.label} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
