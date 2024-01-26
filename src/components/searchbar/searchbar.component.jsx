import React from "react";
import "./searchbar.styles.css";
const handleInput = e => {
    console.log(e.target.value)
  };
const SearchBar = ({ placeholder, handleInput }) => (
<input
className="search"
type="search"
placeholder={placeholder}
onChange={handleInput}
/>
);

export default SearchBar;