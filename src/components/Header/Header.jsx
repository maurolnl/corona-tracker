import React from "react";
import "./index.css";
import AppLogo from '../../public/covid.png'
import SearchForm from "../SearchForm";

const Header = ({ handleSubmit, handleChange, word }) => {
  return (
    <header className="App-header">
      <div className="App-logo">
        <img className="App-img" src={AppLogo} alt="covid-logo"/> 
      </div>
      <h1 className="App-Title">Corona Tracker</h1>
      <SearchForm 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        word={word}
      />
    </header>
  );
};

export default Header;
