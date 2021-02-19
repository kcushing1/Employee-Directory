import React from "react";

export default function Search(props) {
  return (
    <input
      type="text"
      label="Search"
      name="search"
      value={props.value}
      placeholder="Search Name"
      onChange={props.handleSearchByName}
    ></input>
  );
}
