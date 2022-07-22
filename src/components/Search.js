import React from "react";

function Search() {
  return (
    <div
      className="d-flex justify-content-center align-items-center px-2 d-none  d-md-flex mb-4"
      id="search"
      style={{
        borderRadius: "3px",
        background: "inherit",
        border: "1px solid #fff",
        width: "450px",
        margin: "0 auto",
      }}
    >
      <i className="fas fa-search"></i>
      <form className="d-flex">
        <input
          className="form-control me-2 border-0"
          type="search"
          id="search-input"
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default Search;
