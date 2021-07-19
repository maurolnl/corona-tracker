import React, { useState, useEffect } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer'

function App() {

  const [keyword, setKeyword] = useState('argentina')
  const [word, setWord] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setKeyword(word)
  }

  const handleChange = (e) => {
    setWord(e.target.value)
  }

  return (
    <div className="App">
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        word={word}
      /> 
      <Main 
        keyword={keyword}
      /> 
     <Footer/> 
    </div>
  )
}

export default App
