import React from "react";

const SearchResultLabel = ({label, searchResult}) => {
  return (
    <p className="search-result">
      {label}{""}
      <a className="search-result-highlight">
        {searchResult}
      </a>{" "}
      <p className="data-origin">
        (data fetched from{" "}
        <a
          href="https://ourworldindata.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="main-link"
        >
          OurWorldInData
        </a>
        {")"}
      </p>
    </p>
  );
};
export default SearchResultLabel;
