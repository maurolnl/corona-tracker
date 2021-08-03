import React, {useState} from "react";
import { useLocation } from "wouter";
import "./index.css";

const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="Search-Form">
      <input
        type="text"
        value={keyword}
        placeholder="Search by Country..."
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
