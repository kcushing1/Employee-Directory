import React from "react";

export default function Table(props) {
  //take in generated info
  //fill table
  //let fullName = props.name.first + " " + props.name.last

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.location}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
