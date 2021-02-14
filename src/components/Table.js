import React from "react";

export default function Table(props) {
  //take in generated info
  //fill table
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
            <td>Tom</td>
            <td>20</td>
            <td>tom@hi.com</td>
            <td>555-UCA-LLME</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
