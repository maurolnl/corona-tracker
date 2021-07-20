import React from 'react'
import './index.css'

const SearchForm = ({handleChange, handleSubmit, word}) => {
  return (
      <form onSubmit={handleSubmit} className="Search-Form">
        <input
          type="text"
          value={word}
          placeholder="Search by Country..."
          onChange={handleChange}
        />
        <button>Get Data</button>
      </form>
  )
}

export default SearchForm
