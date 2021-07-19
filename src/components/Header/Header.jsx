import React from "react";
import './index.css'

const Header = ({handleSubmit, handleChange, word}) => {
  return (
    <header className="App-header">
      <p className="App-logo">LOGO</p>
      <h1>Corona Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          placeholder="Search by Country..."
          onChange={handleChange}
        />
        <button>Get Data</button>
      </form>
    </header>
  );
};

export default Header;
