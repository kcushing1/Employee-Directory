import React from "react";
import Image from "./Image";

export default function (props) {
  return (
    <div className="row border-bottom border-info">
      <div className="col">
        <Image alt={props.alt} src={props.src} />
      </div>
      <div className="col">
        <p>{props.name}</p>
        <p>{props.email}</p>
      </div>
      <div className="col">
        <p>{props.phone}</p>
        <p>{props.location}</p>
      </div>
    </div>
  );
}
