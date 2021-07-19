import React from 'react'

const SearchForm = ({handleChange, handleSubmit, word}) => {
  return (
      <form onSubmit={handleSubmit}>
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
