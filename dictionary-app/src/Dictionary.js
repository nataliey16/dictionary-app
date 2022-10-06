import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSearchSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary-App">
      <form className="Dictionary-search-engine" onChange={handleKeyword}>
        <div className="row">
          <input
            className="col-sm-8 form-control w-75"
            type="search"
            placeholder="Enter a word"
            autoFocus="on"
          ></input>
          <input
            className="search-btn btn btn-primary col-sm-4 w-25"
            type="submit"
            value="Search"
            onClick={handleSearchSubmit}
          ></input>
        </div>
      </form>
    </div>
  );
}
