import React from "react";
import Image from "./Image";

export default function (props) {
  return (
    <div className="row border-bottom border-info text-center">
      <div className="col align-middle mx-auto">
        <Image alt={props.alt} src={props.src} />
      </div>
      <div className="col">
        <p className="font-weight-bold">{props.name}</p>
        <p>{props.email}</p>
      </div>
      <div className="col">
        <p>{props.phone}</p>
        <p className="font-italic">{props.location}</p>
      </div>
    </div>
  );
}
