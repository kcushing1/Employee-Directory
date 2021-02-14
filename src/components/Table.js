import React from "react";
import fakeData from "../assets/fakeData";

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
            <th>Age</th>
            <th>email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
