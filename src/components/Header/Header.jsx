import React from "react";
import "./index.css";
import AppLogo from '../../public/covid.png'
import SearchForm from "../SearchForm";
import { Link } from "wouter";

const Header = ({ handleSubmit, handleChange, keyword }) => {
  return (
    <header className="App-header">
      <div className="Header-Container">
        <div className="App-logo">
          <Link to="/">
            <img className="App-img" src={AppLogo} alt="covid-logo"/> 
          </Link>
        </div>
        <h1 className="App-Title">Corona Tracker</h1>
        <SearchForm 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          keyword={keyword}
        />
      </div>
    </header>
  );
};

export default Header;
