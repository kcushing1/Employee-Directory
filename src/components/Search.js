import React from "react";

export default function Search() {
  return (
    <form>
      <input type="text" label="Search" name="search"></input>
      <button type="button" name="searchBtn" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
