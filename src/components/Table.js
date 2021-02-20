import React from "react";

export default function Table(props) {
  //take in generated info
  //fill table
  //let fullName = props.name.first + " " + props.name.last

  return (
    <table className="table">
      <tr>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.location}</td>
      </tr>
    </table>
  );
}
